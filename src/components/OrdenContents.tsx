import { formatCurrency } from "../helpers"
import { Menu, OrdenItem } from "../types"

type OrdencontentsProps = {
    orden:OrdenItem[],
    remuveItem:(id:Menu['id']) => void
}

export default function OrdenContents({orden,remuveItem}:OrdencontentsProps) {
 
 
    return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-5">
        {
            (
                orden.map( opc => (
                    <div 
                    className="flex justify-between items-center mt-10 border-t border-gray-300 py-5 last-of-type:border-b"
                     key={opc.id}>
                        <div>
                            <p className="text-lg">
                                {opc.name} -  {formatCurrency(opc.price)}
                            </p>
                            <p className="font-black">
                                Cantidad:{opc.quantity} - {formatCurrency(opc.price * opc.quantity)}
                            </p>
                        </div>

                        <button 
                            className="bg-red-600 h-8 w-8 rounded-full text-white text-center font-black"
                            onClick={() =>  remuveItem(opc.id)}
                        >
                            X
                        </button>

                    </div>
                ))
            )
    
        }

      </div>


    </div>
  )
}
