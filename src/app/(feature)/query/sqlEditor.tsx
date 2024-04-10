"use client";
import CustomTable from "@/components/common/customTable";
import LoadingSpinner from "@/components/common/loading-spinner";
import { Button } from "@/components/ui/button";

import { DatabaseZap, Loader2, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
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
  const { mutate } = useAddQuery();
  const { mutate: deleteQuery, isPending: isDeletePending } = useDeleteQuery();
  const { data: savedQueries } = useGetSavedQueries(savedQueriesInitialData);
  const handleQuerySubmit = () => {
    fetchData();
  };
  const handleResetQuery = () => {
    mutate({ query });
  };
  const handleDeleteQuery = (e: any, index: number) => {
    e.stopPropagation();
    deleteQuery({ index });
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex  gap-4">
        <div className="flex w-full flex-col gap-2 h-[calc(100vh-450px)]">
          <CodeEditor
            value={query}
            language="sql"
            placeholder=""
            onChange={(evn) => setQuery(evn.target.value)}
            padding={15}
            className="h-full w-full"
            style={{
              backgroundColor: "#f5f5f5",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
          <div className="flex justify-end gap-4">
            <Button
              onClick={handleResetQuery}
              variant="secondary"
              className="flex align-middle gap-2 "
            >
              Save
            </Button>
            <Button disabled={isLoading} onClick={handleQuerySubmit}>
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
                {savedQueries.map((list: string, index: number) => (
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
        <div>{invoices.length > 0 && <CustomTable invoices={invoices} />}</div>
      )}
    </div>
  );
}
