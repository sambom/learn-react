// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
//import Gallery from "./components/gallery"
import Todos from "./components/todos"
import RecipeList from "./qcomps/recipes"
//import Gallery from "./qcomps/gallery_props"
import List from "./qcomps/list_keys_id"
import Gallery from "./qcomps/state"
//import Form from "./qcomps/stuckForm"
import ShoppingCart from "./qcomps/shoppingCart"
import Form from "./qcomps/updObjectsForm"
import Artist from "./qcomps/artistsRemoveArr"
import BucketList from "./qcomps/arrObj"

export default function Home() {
  return (
    <BucketList />
  )
}
