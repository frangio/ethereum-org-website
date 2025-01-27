import React from "react"
import { Box, Table } from "@chakra-ui/react"

export interface IProps {
  children?: React.ReactNode
}

const MarkdownTable: React.FC<IProps> = ({ children }) => (
  <Box my={8}>
    <Table
      sx={{
        th: {
          borderBottom: "1px solid",
          borderColor: "border",
          whiteSpace: "nowrap",
        },
      }}
    >
      {children}
    </Table>
  </Box>
)

export default MarkdownTable
