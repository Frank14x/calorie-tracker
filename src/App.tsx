import { menuItems } from "./data/db"
import Menuitem from "./components/MenuItem";
import useOrden from "./hooks/useOrden";
import TipForm from "./components/TipForm";
import OrdenContents from "./components/OrdenContents";
import Ordertotals from "./components/Ordertotals";


function App() {
  
  const {orden,addItem,remuveItem,tip,setTip,placeOrder }=useOrden()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas.</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md: grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2> 

          <div className="space-y-3 mt-10">
              {menuItems.map( (item) => (
                  <Menuitem 
                  key={item.id}
                  item={item}
                  addItem={addItem}
                  />

                ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

        {orden.length>0?(
          <>
           <OrdenContents
                orden={orden}
                remuveItem={remuveItem}
               />
        
              <TipForm
               setTip={setTip}
               tip={tip}
              />

              <Ordertotals
                orden={orden}
                tip={tip}
                placeOrder={placeOrder}
              />
          </>
          ): 
            <p className="text-center">Puede hacer su orden cuando este listo.</p>        
        }
             

            
        </div>
      </main>

    </>
  )
}

export default App
