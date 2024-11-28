import { useState } from "react"
import type { OrdenItem,Menu } from "../types"

export default function useOrden() {

    const [orden,setOrden]= useState<OrdenItem[]>([])
    const [tip,setTip]= useState(0)
    const addItem = (item:Menu) => {
        const itemExist = orden.find(ordenItem => ordenItem.id === item.id)
        
        if(itemExist){
           const UpdatedOrden= orden.map( ordenItem => ordenItem.id === item.id ?
            {...ordenItem,quantity: ordenItem.quantity= ordenItem.quantity+1 }:ordenItem
           )
           setOrden(UpdatedOrden)


        }else{
            const newItem:OrdenItem = {...item,quantity:1}
        setOrden([...orden, newItem])

        }
      }
      const remuveItem =(id:Menu['id']) => {
        setOrden(orden.filter( item => item.id !== id))
      }

      const placeOrder = () => {
       setOrden([])
       setTip(0)
  
      }

    return{
        orden,
        tip,
       setTip,
       addItem,
       remuveItem,
       placeOrder
       

}}
