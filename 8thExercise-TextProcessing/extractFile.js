function solve(input){
    let start=input.lastIndexOf('\\');
    let file=input.substring(start+1);
    let extensionIndex=file.lastIndexOf('.');
    let extension=file.substring(extensionIndex+1);
    console.log('File name: '+file.substring(0,extensionIndex));
    console.log('File extension: '+extension);
}

solve('C:\\Projects\\Data-Structures\\LinkedList.cs.bat')