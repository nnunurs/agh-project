/* eslint-disable react/prop-types */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DataTableViewOptions } from "./DataTableViewOptions";
import { RefreshCw } from "lucide-react";

export function DataTableToolbar({ table, refresh }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter orders..."
          value={table.getColumn("title")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-1 mr-2 items-center space-x-2">
          <Button onClick={refresh}>
            <RefreshCw className="mr-2 h-3.5 w-3.5 text-muted-foreground/70"/>
            Refresh
          </Button>
        </div>
        <div className="flex items-center space-x-2">
        <DataTableViewOptions table={table} />
        <a href="/add-order">New order +</a>
        </div>
      </div>
    </div>
  );
}
