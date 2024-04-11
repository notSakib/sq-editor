import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function SqlEditor({ setValue, value }: { setValue: any; value: string }) {
  return (
    <AceEditor
      mode="mysql"
      value={value}
      onChange={setValue}
      name="CODE_EDITOR"
      fontSize={14}
      lineHeight={20}
      showGutter={true}
      highlightActiveLine={false}
      showPrintMargin={false}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 0,
      }}
    />
  );
}

export default SqlEditor;
