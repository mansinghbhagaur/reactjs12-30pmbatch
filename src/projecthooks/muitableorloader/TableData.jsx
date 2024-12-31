import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
      },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
            border: 0,
      },
}));



export default function TableData() {
      const [data, setData] = React.useState();
      const [loader, setLoader] = React.useState(true);

      React.useEffect(() => {
            const fetchData = async () => {
                  try {
                        const data = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
                        setData(data);
                        setLoader(false);
                  } catch (error) {
                        console.log(error);
                  }
            }
            fetchData();
      }, []);

      console.log(data)

      if (loader) {
            return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress /></Box>
      }

      return (
            <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                              <TableRow>
                                    <StyledTableCell>Id</StyledTableCell>
                                    <StyledTableCell align="left">Name</StyledTableCell>
                                    <StyledTableCell align="left">Mobile</StyledTableCell>
                                    <StyledTableCell align="right">Email</StyledTableCell>
                                    <StyledTableCell align="right">Adrress</StyledTableCell>

                              </TableRow>
                        </TableHead>
                        <TableBody>
                              {
                                    data.map((item, i,) => (
                                          <StyledTableRow key={item.id}>
                                                <StyledTableCell component="th" scope="row">{item.id}</StyledTableCell>
                                                <StyledTableCell component="th" scope="row">{item.name}</StyledTableCell>
                                                <StyledTableCell component="th" scope="row">{item.phone}</StyledTableCell>
                                                <StyledTableCell component="th" scope="row">{item.email}</StyledTableCell>
                                                <StyledTableCell component="th" scope="row">{item.address.street}</StyledTableCell>
                                          </StyledTableRow>
                                    ))
                              }

                        </TableBody>
                  </Table>
            </TableContainer>
      );
}
