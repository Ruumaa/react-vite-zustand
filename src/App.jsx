import { useState, useEffect } from "react";
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
import "./App.css";
import { useNavigate } from "react-router-dom";
import useStore from "./store/zustand.js";

const productDatabase = [
  {
    id: 1,
    title: "Tamiya",
    price: "15000",
  },
  {
    id: 2,
    title: "Bayblade",
    price: "20000",
  },
  {
    id: 3,
    title: "Lato-lato",
    price: "5000",
  },
];

function App() {
  //States
  const [title, setTitle] = useState("");
  // const [items, setItems] = useState([]);

  //global state items
  const items = useStore((state) => state.items);
  //global state setItems
  const setItems = useStore((state) => state.setItems);
  const revenue = useStore((state) => state.revenue);
  const setRevenue = useStore((state) => state.setRevenue);

  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  // const [revenue, setRevenue] = useState(0);
  //konfigurasi untuk pindah halaman / router
  const navigate = useNavigate();
  //useEffect, menjalankan program saat render pertama
  useEffect(() => {
    //memanggil fungsi setItems(untuk mengubah nilai items) menjadi data dari productDatbase
    setItems(productDatabase);
  }, []);

  const handleChangeProduct = (e) => {
    //mengambil value dari functionnya
    const currentId = e.target.value;
    //melakukan iterasi dan yang cocok/true akan menjadi nilai foundItem
    const foundItem = items.find((el) => el.id === +currentId);

    //mengubah sesuai dengan title dan harga setelah berubah
    setTitle(foundItem.title);
    setPrice(foundItem.price);
  };
  //mengambil nilai setelah submit dipencet
  const handleSubmit = (e) => {
    //menangkap value sebelum dan ditambah lagi jika submit lagi
    setRevenue(price * quantity);
  };

  const handleNavigation = () => {
    navigate("/data");
  };

  return (
    <>
      <HStack w="100%" h="100%">
        <Container boxShadow="dark-lg" padding="40px">
          {/* wrapper forms */}
          <Text fontSize="6xl" textAlign="center">
            BAKUL
          </Text>
          <FormControl textAlign="center" as="fieldset" py="20px">
            <FormLabel as="legend" pt="20px">
              Mainan masa kecilmu yang mana?
            </FormLabel>
            <RadioGroup defaultValue="">
              <HStack spacing="24px">
                {productDatabase.map((product) => (
                  <Radio key={product.id} value={product.title}>
                    {product.title}
                  </Radio>
                ))}
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <Stack spacing="20px">
              <FormLabel>Title</FormLabel>
              {/* mengambil value dari yg dipilih diinput */}
              <Select
                boxShadow="md"
                onChange={handleChangeProduct}
                placeholder="Select an item"
              >
                {items.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </Select>
              <FormLabel>Quantity</FormLabel>
              <Input
                type="text"
                boxShadow="md"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <FormLabel>Price</FormLabel>
              <Input type="text" boxShadow="md" value={price} readOnly />
              <FormLabel>Total Price</FormLabel>
              <Input
                type="text"
                boxShadow="md"
                value={price * quantity}
                readOnly
              />
              <Button colorScheme="teal" boxShadow="md" onClick={handleSubmit}>
                SUBMIT
              </Button>
              <Button colorScheme="teal" onClick={handleNavigation}>
                To Data
              </Button>
            </Stack>
          </FormControl>
        </Container>
      </HStack>
    </>
  );
}

export default App;
