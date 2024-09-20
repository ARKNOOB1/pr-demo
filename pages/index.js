import { Container, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import Link from "next/link"
import Button from "@mui/material/Button"

//객체 배열 생성에 사용하는 함수
function createData(name, github, link) {
  return{name,github,link}
}
const rows = [
  // 데모의 이름, 깃허브 주소, 서버에서 라우팅하는 주소를 입력
  createData('duduge','https://github.com/ARKNOOB1/JavaScript_Lacture/tree/master/mole_hunt', '/duduge'),
  createData('snake','https://github.com/ARKNOOB1/JavaScript_Lacture/tree/master/Snake', '/snakegame'),
]

export default function Home() {
  return (
    <>
      <Container fixed>
      <Table sx={{minWidth : 650}} aria-label="demo-list">
          <TableHead>
            <TableRow>
              <TableCell>Demo-List</TableCell>
              <TableCell>Github</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{'&:last-child td, &:last-child th': {border:0}}}
              >
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell><Link href={row.github}>깃허브 바로가기</Link></TableCell>
                <TableCell><Button variant="outlined" size="small" href={row.link}>Link</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  )
}
