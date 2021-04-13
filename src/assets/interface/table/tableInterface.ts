/**
 * 表格columns定义
 */
export interface TableColumn {
  prop?: string
  label: string
  width?: number
  slot?: string
  ellipsis?: boolean
}

export interface TableData {
  [key : string]: any
}
