function runCode() {
    const code = document.getElementById("codeEditor").value;
    const iframe = document.getElementById("output");
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(code);
    iframe.contentWindow.document.close();
  }
  