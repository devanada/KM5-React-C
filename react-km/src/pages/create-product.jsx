import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

import Layout from "../components/layout";
import { Input, Select } from "../components/input";
import Button from "../components/button";
import Table from "../components/table";

// Functional component biasa disebut sebagai stateless component
function CreateProduct1() {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [products, setProducts] = useState([]);

  /*
  Ketika ada perubahan state pada saat side effect berjalan, maka terjadi sebuah re-render component.
  Side effect dijalankan sekali setelah component telah dimuat, mirip seperti dengan componentDidMount (menambahkan empty scope sebagai dependencies/deps)

  useEffect(() => {
    ....
  }, [])
  */

  /*
 Side effect dijalankan sekali pada saat component telah dimuat, lalu akan dijalankan kembali ketika ada perubahan nilai dari salah satu state yang ditulis didalam scope, mirip seperti componentDidMount + componentDidUpdate

 useEffect(() => {
  ...
 }, [state])
 */

  /*
 Side effect akan dijalankan secara terus menerus kalau penulisannya tanpa scope ([])

 useEffect(() => {
  ...
 })
 */

  /*
 Side effect akan dijalankan setiap waktu (mirip dengan penulisan useEffect tanpa scope), namun dia akan berhenti/unsubscribe ketika kita meninggalkan halaman, atau sebelum komponen/element akan dihancurkan dari DOM tree, dengan harap agar performa dari web tetap terjaga karena tidak ada proses berjalan dibelakang layar. 
 Contoh implementasi di real case yaitu OTP (ada perhitungan mundur yang dijalankan setiap detik), atau status online di beberapa sosial media.
 useEffect ini sendiri mirip dengan componentDidMount + componentDidUpdate + componentWillUnmount

 useEffect(() => {
  ...
  return () => {
    ...
  }
 })
 */
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setTimeout(() => {
      setTitle("HELLO WORLD");
      setIsLoading(false);
    }, 2000);
  }

  // TODO: Fungsi ini beri validasi ketika semua input belum terisi maka data tidak di push ke tabel
  function handleSubmit(event) {
    event.preventDefault();
    if (productName.length > 0) {
      const product = {
        id: products.length + 1,
        productName: productName,
        productCategory: productCategory,
        productPrice: productPrice,
      };
      const dupeProducts = [...products, product];
      setProducts(dupeProducts);
      // TODO: Data yang telah di input, silahkan di reset seperti semula
    } else {
      alert("Input belum terisi semua");
    }
  }

  return (
    <Layout>
      <p>{isLoading ? "LOADING" : title}</p>
      <form onSubmit={handleSubmit}>
        <Input
          label="Product Name"
          type="text"
          defaultValue={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
        <Select
          label="Product Category"
          placeholder="Choose..."
          options={["Fruits", "Vegetable", "Dairy"]}
          onChange={(event) => setProductCategory(event.target.value)}
        />
        <Input
          label="Product Price"
          type="number"
          defaultValue={productPrice}
          onChange={(event) => setProductPrice(event.target.valueAsNumber)}
        />
        <Button label="Submit" type="submit" />
      </form>
      <Table
        headers={["No", "Product Name", "Product Category", "Product Price"]}
        datas={products}
      />
    </Layout>
  );
}

// Class component biasa disebut sebagai stateful component
// class CreateProduct2 extends React.Component {
class CreateProduct2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    setTimeout(() => {
      // setState merupakan updater yang fungsinya untuk merubah nilai dari suatu state
      this.setState({
        title: "HELLO WORLD",
      });
    }, 2000);
  }

  render() {
    return (
      <Layout>
        <p>{this.state.title}</p>
      </Layout>
    );
  }
}

export { CreateProduct1, CreateProduct2 };
