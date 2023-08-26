import { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  RadioGroup,
  Text,
  Radio,
  Select,
  Input,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import App from "./App.css";
import { useLocation } from "react-router-dom";
import useStore from "./store/zustand.js";

export default function Data() {
  //States
  const location = useLocation();

  //global state items
  const items = useStore((state) => state.items);
  //global state setItems
  const revenue = useStore((state) => state.revenue);

  return (
    <>
      <HStack w="100%" h="100%">
        <Container boxShadow="dark-lg" padding="40px">
          <Text fontSize="6xl" textAlign="center">
            DATA
          </Text>
          <FormControl>
            <Stack spacing="20px">
              <FormLabel>Revenue</FormLabel>
              <Input type="text" value={revenue} readOnly />
              <TableContainer>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>ID</Th>
                      <Th>Title</Th>
                      <Th>Price</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {items.map((item, index) => {
                      return (
                        <Tr key={index}>
                          <Td>{item.id}</Td>
                          <Td>{item.title}</Td>
                          <Td>{item.price}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Stack>
          </FormControl>
        </Container>
      </HStack>
    </>
  );
}
