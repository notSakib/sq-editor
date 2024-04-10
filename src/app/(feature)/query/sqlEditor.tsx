"use client";
const CustomTable = dynamic(() => import("@/components/common/customTable"), {
  ssr: false,
});
import { CSVLink } from "react-csv";
const LoadingSpinner = dynamic(
  () => import("@/components/common/loading-spinner"),
  {
    ssr: false,
  }
);
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { DatabaseZap, Download, Loader2, Trash2 } from "lucide-react";
import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useAddQuery,
  useDbColumn,
  useDeleteQuery,
  useGetSavedQueries,
  useQueryData,
} from "@/apiQueries";

export default function SqlEditor({ savedQueriesInitialData }: any) {
  const [query, setQuery] = useState<string>("SELECT * FROM TABLE");
  const [activeTab, setActiveTab] = useState<string>("saved");
  const {
    data: invoices,
    isFetching: isLoading,
    refetch: fetchData,
  } = useQueryData();
  const { data: dbColumn } = useDbColumn({ activeTab });
  const { mutate: saveQuery, isPending: isSaveLoading } = useAddQuery();
  const { mutate: deleteQuery } = useDeleteQuery();
  const { data: savedQueries }: { data: string[] } = useGetSavedQueries(
    savedQueriesInitialData
  );
  const handleQuerySubmit = () => {
    fetchData();
  };
  const handleSaveQuery = () => {
    saveQuery({ query });
  };
  const handleDeleteQuery = (
    e: React.MouseEvent<SVGSVGElement>,
    index: number
  ) => {
    e.stopPropagation();
    deleteQuery({ index });
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex  gap-4">
        <div className="flex w-full flex-col gap-2 h-[calc(100vh-480px)]">
          <CodeEditor
            value={query}
            language="sql"
            placeholder=""
            onChange={(evn) => setQuery(evn.target.value)}
            padding={15}
            className="h-full w-full rounded-[8px] bg-primary-foreground"
            style={{
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
          <div className="flex justify-end gap-4">
            <Button
              onClick={handleSaveQuery}
              variant="secondary"
              className="flex align-middle gap-2 "
              disabled={isSaveLoading}
            >
              {isSaveLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Save
            </Button>
            <Button disabled={isLoading || !query} onClick={handleQuerySubmit}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Run Query
            </Button>
          </div>
        </div>

        <div className="overflow-auto w-1/2 max-w-[300px]">
          <Tabs
            value={activeTab}
            className="w-full"
            onValueChange={(tab) => setActiveTab(tab)}
          >
            <TabsList>
              <TabsTrigger value="saved">Saved Queries</TabsTrigger>
              <TabsTrigger value="data">Data Table</TabsTrigger>
            </TabsList>
            <TabsContent value="saved">
              <ul className="h-[calc(100vh-500px)] overflow-auto px-1">
                {savedQueries.map((list, index) => (
                  <li
                    className={`py-2  shadow-sm border-1 font-medium text-muted-foreground hover:text-primary  cursor-pointer`}
                    key={list}
                  >
                    <span
                      className="flex justify-between item-center text-sm  "
                      onClick={() => setQuery(list)}
                    >
                      <span className="truncate text-ellipsis w-[80%]">
                        {list}
                      </span>
                      <div className="flex items-center">
                        <Trash2
                          onClick={(e) => handleDeleteQuery(e, index)}
                          className="!h-4  !w-4  text-sm text-gray-500  hover:text-red-500 transition-all "
                        />
                      </div>
                    </span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="data">
              <ul className="h-[calc(100vh-500px)] overflow-auto px-1">
                {dbColumn.map((list: string) => (
                  <li
                    className={`py-2 flex items-center gap-2 shadow-sm border-1 font-medium text-muted-foreground hover:text-primary  cursor-pointer `}
                    key={list}
                  >
                    <DatabaseZap className="h-4 w-4  text-primary" />
                    <span className="flex  text-sm text-ellipsis ">{list}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {invoices.length > 0 ? (
            <div>
              <div className="flex justify-between items-center py-1">
                <span>({invoices.length} rows)</span>
                <CSVLink data={invoices} filename={"atlan-query.csv"}>
                  <Button
                    variant="ghost"
                    className="text-sm flex gap-2 items-center"
                  >
                    <Download className="h-4 w-4" />
                    Download CSV
                  </Button>
                </CSVLink>
              </div>
              <CustomTable invoices={invoices} />
            </div>
          ) : (
            <div className="flex justify-center py-12 w-full text-center">
              <h3>
                No data to display. Please run a 🔍 query to show results.
              </h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
