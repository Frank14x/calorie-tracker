import { useMemo } from "react"
import { OrdenItem } from "../types"
import { formatCurrency } from "../helpers"

type OrdenTotalsProps = {
    orden:OrdenItem[],
    tip:number,
    placeOrder: () => void;
    
}

export default function Ordertotals({orden,tip,placeOrder}: OrdenTotalsProps) {

    const SubtotalAmount = useMemo
    (
        () => orden.reduce( (total, item) => 
          total + (item.quantity * item.price), 0)
      ,[orden]
    )

    const tipAmount = useMemo(( () => SubtotalAmount * tip), [tip,orden])
    const totalAmount = useMemo((() => SubtotalAmount + tipAmount ),[tip,orden] )
    
    
  
  
    return (
    <>
      <div className="space-y-3">
            <h2 className="font-black text-2xl" >Totales y Propinas</h2>
            <p>
                Subtotal a pagar:{''}
                <span className="font-bold">{formatCurrency(SubtotalAmount)}</span>
            </p>
            <p>
                Propinas:{''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>
            <p>
                Total a pagar:{''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
      </div>

      <button 
          className="w-full bg-black p3 uppercase text-white font-bold mt-10
           disabled:opacity-10"
          disabled={totalAmount === 0}
          onClick={()=> placeOrder()}
      >
        Guardar Orden
      </button>
    </>
  )
}
