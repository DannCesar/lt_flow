"use client"
import { flexRender, type Table as TableType } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { PaginationComponent } from "../Pagination";
import EmptyComponent from "../Empty";

interface DataTableProps<TData> {
  table: TableType<TData>;
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  onClick?: (row: TData) => void;
}

export function DataTable<TData>({
  table,
  currentPage,
  totalPages,
  onPageChange,
  onClick = () => {},
}: DataTableProps<TData>) {
  if (!table) return <></>;
  return (
    <div>
      <div className="rounded-md border p-3 border-[#2B2C42]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups()?.map((headerGroup) => (
              <TableRow className="border-[#2B2C42]" key={headerGroup.id}>
                {headerGroup?.headers?.map((header) => {
                  return (
                    <TableHead className="text-white" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => onClick(row.original)}
                  className="cursor-pointer border-[#2B2C42]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="text-center"
                >
                  <EmptyComponent
                    title="Não há transações"
                    description="Registre sua transação clicando em 'Registrar transação'"
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {onPageChange && (
          <div className="flex text-xs justify-end space-x-2 py-4">
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
