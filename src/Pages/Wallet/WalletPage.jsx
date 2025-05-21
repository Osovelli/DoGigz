import { Table } from "@/components/Table"
import { Eye, Plus, Minus, RefreshCw, Briefcase, Trash2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FundWalletModal from "@/components/Modals.jsx/FundWalletModal"
import CardFundingModal from "@/components/Modals.jsx/CardFundingModal"
import ConvertPointsModal from "@/components/Modals.jsx/ConvertPointsModal"
import WithdrawModal from "@/components/Modals.jsx/withdrawal/WithdrawModal"
import { useState } from "react"

export default function WalletPage() {
  const [isFundWalletModalOpen, setIsFundWalletModalOpen] = useState(false)
  const [isCardFundingModalOpen, setIsCardFundingModalOpen] = useState(false)
  const [activePaymentMethod, setActivePaymentMethod] = useState(null)
  const [isConvertPointsModalOpen, setIsConvertPointsModalOpen] = useState(false)
  const [pointsBalance, setPointsBalance] = useState(1200)
  const [walletBalance, setWalletBalance] = useState(200000000)
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false)
  
  // Sample transaction data
  const transactions = [
    {
      id: 1,
      type: "point_conversion",
      title: "Point Conversion",
      description: "Description",
      date: "22-01-2024",
      amount: "$80.00",
      icon: <RefreshCw size={18} className="text-gray-600" />,
    },
    {
      id: 2,
      type: "top_up",
      title: "Wallet Top up",
      description: "Description",
      date: "22-01-2024",
      amount: "$80.00",
      icon: <Plus size={18} className="text-gray-600" />,
    },
    {
      id: 3,
      type: "withdrawal",
      title: "Withdrawal",
      description: "Description",
      date: "22-01-2024",
      amount: "$80.00",
      icon: <Minus size={18} className="text-gray-600" />,
    },
    {
      id: 4,
      type: "earning",
      title: "Earning from gig",
      description: "Gig ID #1000",
      date: "22-01-2024",
      amount: "$80.00",
      icon: <Briefcase size={18} className="text-gray-600" />,
    },
  ]

  // Table columns configuration
  const columns = [
    { key: "details", label: "Details" },
    { key: "date", label: "Date" },
    { key: "amount", label: "Amount" },
  ]

  // Custom cell renderer for the table
  const renderCustomCell = (key, value, item) => {
    if (key === "details") {
      return (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">{item.icon}</div>
          <div>
            <div className="font-medium">{item.title}</div>
            <div className="text-gray-500 text-xs">{item.description}</div>
          </div>
        </div>
      )
    }
    if (key === "date") {
      return <span>{item.date}</span>
    }
    if (key === "amount") {
      return <span>{item.amount}</span>
    }
    return value
  }

  // Custom actions renderer for the table
  const renderActions = (item) => {
    return (
      <div className="flex justify-end space-x-2">
        <button className="text-blue-600 hover:text-blue-900">
          <Eye size={16} />
        </button>
      </div>
    )
  }

  const handleFundWallet = () => {
    setIsFundWalletModalOpen(true)  
  }

  const handlecloseFundWalletAndOpenCardFundingModal = () => {
    //
  }

  const handleAddMoney = () => {
    setIsCardFundingModalOpen(true)
  }

  const handleWithdraw = () => {
    setIsWithdrawModalOpen(true)
  }

  const handleMethodSelect = (methodId) => {
    setActivePaymentMethod(methodId)
    if (methodId === "bank") {
      setIsCardFundingModalOpen(false)
      setIsFundWalletModalOpen(true)
    }
  }

  const handleConvertPoints = () => {
    setIsConvertPointsModalOpen(true)
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">My Wallet</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Wallet Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Wallet Balance */}
          <div className="bg-white rounded-lg border p-6">
            <div className="text-gray-600 mb-1">Wallet Balance</div>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold flex items-center">
                <span className="text-[#a8e9d5]">$</span>200,000,000
                <span className="text-xl">.00</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12h20M12 2v20" />
                </svg>
              </button>
            </div>
            <div className="text-gray-500 text-sm mt-2">Available balance as at {Date.now().toPrecision(10)}</div>
          </div>

          {/* Point Balance */}
          <div className="bg-white rounded-lg border p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-600 mb-1">Point Balance</div>
                <div className="text-3xl font-bold">{pointsBalance}pt</div>
              </div>
              <Button 
              className="bg-[#a8e9d5] hover:bg-[#98d9c5] text-black"
              onClick={handleConvertPoints}
              disabled={pointsBalance <= 0}
              >
                <RefreshCw size={16} className="mr-2" />
                Convert
              </Button>
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
            <Table
              data={transactions}
              columns={columns}
              renderCustomCell={renderCustomCell}
              renderActions={renderActions}
              showSearch={false}
              itemsPerPage={8}
            />
          </div>
        </div>

        {/* Right Column - Actions and Cards */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border p-6 space-y-8">
            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="flex-1 bg-[#a8e9d5] hover:bg-[#98d9c5] text-black font-medium" onClick={handleFundWallet}>
                <Plus size={18} className="mr-2" />
                Top Up
              </Button>
              <Button 
              className="flex-1 bg-[#a8e9d5] hover:bg-[#98d9c5] text-black font-medium"
              onClick={handleWithdraw}
              >
                <Minus size={18} className="mr-2" />
                Withdraw
              </Button>
            </div>

            {/* Withdraw Again */}
            <div>
              <h3 className="text-lg font-medium mb-4">Withdraw again</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 mb-2"></div>
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-xs text-gray-500">(Bank-name)</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 mb-2"></div>
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-xs text-gray-500">(Bank-name)</div>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-lg font-medium mb-4">Cards</h3>
              <div className="space-y-4">
                {/* Mastercard */}
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      <div className="h-8 w-8 bg-red-500 rounded-full opacity-70"></div>
                      <div className="h-8 w-8 bg-yellow-500 rounded-full -ml-4 opacity-70"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">Mastercard</p>
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">DEFAULT</span>
                      </div>
                      <p className="text-sm text-gray-500">Debit •••• 0000</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>

                {/* Visacard */}
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      V
                    </div>
                    <div>
                      <p className="font-medium">Visacard</p>
                      <p className="text-sm text-gray-500">Debit •••• 0000</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>

                {/* Add Card Button */}
                <button className="w-full flex items-center justify-center gap-2 text-gray-600 p-3 border rounded-lg hover:bg-gray-50">
                  <Plus size={18} />
                  <span>Link a card</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fund Wallet Modal */}
      <FundWalletModal isOpen={isFundWalletModalOpen} onClose={() => setIsFundWalletModalOpen(false)}/>

        {/* Card Funding Modal */}
        <CardFundingModal isOpen={isCardFundingModalOpen} onClose={() => setIsCardFundingModalOpen(false)} />

      {/* Convert Points Modal */}
      <ConvertPointsModal
        isOpen={isConvertPointsModalOpen}
        onClose={() => setIsConvertPointsModalOpen(false)}
        availablePoints={pointsBalance}
      />

      {/* Withdraw Modal */}
      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        walletBalance={walletBalance}
      />
    </div>
  )
}
