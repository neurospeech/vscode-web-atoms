//tslint:disable

'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as lst from 'vscode-languageserver-types';
import * as html from 'vscode-html-languageservice';
import * as atom from './atomhelper';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "web-atoms" is now active!');

    vscode.languages.registerCompletionItemProvider('html', new CompletionProvider(context));
}

// this method is called when your extension is deactivated
export function deactivate() {
}

let service = html.getLanguageService();

class CompletionProvider implements vscode.CompletionItemProvider {
    
    endsWithIdentifier: RegExp;

    endsWithAtomDock: RegExp;

    endsWithAtomTemplate: RegExp;

    endsWithAtomType: RegExp;

    endsWithSpace: RegExp;

    context: vscode.ExtensionContext



    constructor(context: vscode.ExtensionContext){
        this.context = context;
        
        this.endsWithSpace = /\s+$/;
        this.endsWithIdentifier = /[a-z\-]+$/i;
        this.endsWithAtomType = /atom\-type=(\")?/i;
        this.endsWithAtomTemplate= /atom\-template=(\")?/i;
        this.endsWithAtomDock = /atom\-dock=(\")?/i;
    }

    current: lst.TextDocument;
    currentDoc: html.HTMLDocument;

    provideCompletionItems(
        document: vscode.TextDocument, 
        position: vscode.Position, 
        token: vscode.CancellationToken, 
        context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {

        if(!this.current || this.current.version != document.version){
            var htmlDoc = lst.TextDocument.create('','html', document.version , document.getText());
            this.current = htmlDoc;
            this.currentDoc = service.parseHTMLDocument(this.current);
        }

        var offset = document.offsetAt(position);
        
        var node = this.currentDoc.findNodeAt(offset);
        var nodeStart = document.positionAt(node.start);
        var t = document.getText(new vscode.Range( nodeStart , position));

        var list:vscode.CompletionList = new vscode.CompletionList([], true);


        if(this.endsWithSpace.test(t) || this.endsWithIdentifier.test(t)) {
            this.getElementAttributes(node.tag, node, list.items);            
        }else {
            this.getAttributeValues(t, node, list.items);
        }

        //console.log(`Starting auto completion for ${node.tag} ${context.triggerCharacter}`);

        

        return list;

        //throw new Error("Method not implemented.");
    }
    resolveCompletionItem?(item: vscode.CompletionItem, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CompletionItem> {
        
        throw new Error("Method not implemented.");
    }

    getAttributeValues(text: string, node: html.Node, items: vscode.CompletionItem[]): void {
        if(this.endsWithAtomType.test(text)){
            atom.AtomHelper.instance.resolveControls(items);
        }
    }

    getElementAttributes(tag: string, node: html.Node, items: vscode.CompletionItem[]): void {

        var atomType = node.attributes["atom-type"];
        if(atomType){
            atomType = atomType.substr(1,atomType.length-2);
            atom.AtomHelper.instance.resolve(atomType,items, node.attributes);
        }        


        this.add(items,"atom-title");
        this.add(items,"atom-class");
        if(node.parent && /form\-layout/i.test(node.tag)) {
            this.add(items,"atom-required");
            this.add(items,"atom-label");
            this.add(items,"atom-error");
            this.add(items,"atom-field-visible");
        }
        this.add(items,"atom-event-click", vscode.CompletionItemKind.Event);
        this.add(items,"atom-event-dblclick", vscode.CompletionItemKind.Event);
        this.add(items,"atom-event-mousedown", vscode.CompletionItemKind.Event);
        this.add(items,"atom-event-mouseup", vscode.CompletionItemKind.Event);
        this.add(items,"atom-event-mouseenter", vscode.CompletionItemKind.Event);
        this.add(items,"atom-event-mouseleave", vscode.CompletionItemKind.Event);

        switch(tag.toLowerCase()){
            case "input":
            case "textarea":
            case "button":
                if( /checkbox/i.test(node.attributes["type"])){
                    this.add(items,"atom-checked");
                }
                this.add(items,"atom-event-focus", vscode.CompletionItemKind.Event);
                this.add(items,"atom-event-blur", vscode.CompletionItemKind.Event);
                this.add(items,"atom-event-change", vscode.CompletionItemKind.Event);
                this.add(items,"atom-is-enabled");
                this.add(items,"atom-value");
                return;
            case "img":
                this.add(items,"atom-src");
                this.add(items,"atom-alt");
                return;
            case "iframe":
                this.add(items,"atom-src");
                this.add(items,"atom-target");
                return;
            case "a":
                this.add(items,"atom-src");
                this.add(items,"atom-target");
                this.add(items,"atom-text");
                break;
        }
        this.add(items,"atom-text");
    }

    add(items:vscode.CompletionItem[], title: string, kind? : vscode.CompletionItemKind): void {
        items.push(new vscode.CompletionItem(title, kind || vscode.CompletionItemKind.Property))
    }


}

