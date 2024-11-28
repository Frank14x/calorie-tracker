import { Dispatch,SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipFormProms={
    setTip: Dispatch<SetStateAction<number>>,
    tip:number
}



export default function tipForm({setTip,tip}:TipFormProms) {
  return (
    <div>
        <h3 className="font-black text-2xl ">Propinas :</h3>
        <form >
            {tipOptions.map(tipOpc => (
                <div key={tipOpc.id} className="flex gap-2">
                    <label htmlFor="">{tipOpc.label}</label>
                    <input 
                        id={tipOpc.id}
                        type="radio"
                        name="tip"
                        value={tipOpc.value}
                        onChange={e => setTip(+e.target.value)}
                        checked={tipOpc.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
