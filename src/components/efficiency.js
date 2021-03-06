import React, { useContext } from "react"

import StoreContext from "../context/storeContext"

export default function Efficiency({ data }) {
  const { prices } = useContext(StoreContext)

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Exchange
                    </th>
                    <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Coin [Symbol] [Protocol]
                    </th>
                    {/* <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Symbol (Protocol)
                    </th> */}
                    <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider hidden md:block">
                      Withdrawal Fee
                    </th>
                    {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Min Withdrawal
                    </th> */}
                    <th scope="col" className="pr-5 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Efficiency
                    </th>
                    {/* <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {prices &&
                    data.map(({ id, exchange, coin, protocol, withdrawFee }, index) => (
                      <tr key={id} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                        <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-700">{exchange.name}</td>
                        {/* <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">{coin.name}</td> */}
                        <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-700">
                          {coin.name} [{coin.symbol}] [{protocol.name}]
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-700 hidden md:block">
                          {withdrawFee} {coin.symbol}
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {withdrawMin} {coin.symbol}
                        </td> */}
                        <td className="pr-5 py-4 whitespace-nowrap text-sm text-gray-700 text-right">
                          {((100 * (100 / prices[coin.coingeckoId].usd - withdrawFee)) / (100 / prices[coin.coingeckoId].usd)).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                        {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
