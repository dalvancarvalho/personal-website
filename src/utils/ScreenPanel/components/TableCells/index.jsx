/* TableCells/index.jsx */

export function TableHeader({ children, ...props }) {
  return <th {...props}>{children}</th>
}

export function TableRow({ children, ...props }) {
  return <tr {...props}>{children}</tr>
}

export function TableData({ children, ...props }) {
  return <td {...props}>{children}</td>
}
