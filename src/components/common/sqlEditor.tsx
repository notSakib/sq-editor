import CodeEditor from "@uiw/react-textarea-code-editor";
function SqlEditor({ setValue, value }: any) {
  return (
    <CodeEditor
      value={value}
      language="sql"
      placeholder=""
      onChange={(evn: any) => setValue(evn.target.value)}
      padding={15}
      className="h-full w-full rounded-[8px] bg-primary-foreground"
    />
  );
}

export default SqlEditor;
