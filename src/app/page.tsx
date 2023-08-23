import {
  Coins,
  CheckCircle2,
  Linkedin,
  Github,
  TrendingUp,
  ClipboardList,
  ArrowDown,
  Wallet,
  Receipt,
  ShieldCheck,
  LineChart,
  WalletCards,
  Gamepad2,
  Lightbulb,
  CircleDollarSign,
} from 'lucide-react'
import Image from 'next/image'
import keyFeaturesImg from '../../public/assets/key-features.png'
import howWorksImg from '../../public/assets/how-works.png'
import mobilesImg from '../../public/assets/mobiles.png'
import customerServiceImg from '../../public/assets/customer-service.png'
export default function Home() {
  return (
    <>
      <div className="bg-black">
        <div className="max-w-[1440px] px-8 mx-auto">
          {/* Header - Navigation */}
          <header className="flex justify-between items-center w-full pt-8 text-white">
            <span className="font-bold text-xl">
              Money<span className="text-violet-500">Mind</span>
            </span>
            <ul className="hidden md:flex gap-24 text-zinc-400">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </header>
          {/* Hero Banner */}
          <div className="min-h-[1200px] flex flex-col gap-32 text-white">
            {/* Heading Desktop */}
            <h1 className="text-2xl md:text-7xl font-medium text-center capitalize tracking-wide mt-16">
              Empower Your
              <br /> Financial Future with
              <br /> MoneyMind
            </h1>
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-8">
              <button className="bg-gradient-to-b from-violet-800 to-violet-400 text-white px-8 py-3 rounded-full">
                Join with us
              </button>
              <p className="capitalize text-zinc-400">
                Welcome to ManageFin, Your All-In-One Solution for effective
                financial
                <br /> management. In today&apos;s fast-paced world. staying on
                top of your finances
                <br /> is crucial.
              </p>
              <div className="flex md:flex-col justify-between items-end">
                <span className="font-semibold text-4xl">100%</span>
                <span className="flex items-center gap-1 text-xs text-zinc-400">
                  <ShieldCheck size={14} />
                  Secured
                </span>
              </div>
              <div className="flex md:flex-col justify-between items-end">
                <span className="font-semibold text-4xl">250M+</span>
                <span className="text-xs text-zinc-400">Account Coverage</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="col-span-1 md:col-span-3 flex flex-col items-start p-6 min-w-40 h-[125px] border-b-[.04px] border-r-[.04px] border-zinc-700 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950">
                <span className="flex items-center gap-2 text-sm text-violet-400">
                  <Wallet size={16} />
                  Current Balance
                </span>
                <div className="flex justify-between items-end mt-auto w-full">
                  <span className="text-3xl font-medium">$1,890,28</span>
                  <span className="flex items-center gap-1 text-teal-500">
                    <TrendingUp size={16} />
                    0.30%
                  </span>
                </div>
              </div>
              <div className="col-span-1 md:col-span-3 flex flex-col items-start p-6 min-w-40 h-[125px] border-b-[.04px] border-r-[.04px] border-zinc-700 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950">
                <span className="flex items-center gap-2 text-sm text-violet-400">
                  <Coins size={16} />
                  Available Balance
                </span>
                <div className="flex justify-between items-end mt-auto w-full">
                  <span className="text-3xl font-medium">$3,743,29</span>
                  <span className="flex items-center gap-1 text-teal-500">
                    <TrendingUp size={16} />
                    0.30%
                  </span>
                </div>
              </div>
              <div className="col-span-full md:col-span-4 flex flex-col items-start p-6 min-w-40 h-[125px] border-b-[.04px] border-l-[.04px] border-zinc-700 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950">
                <span className="flex items-center gap-2 text-sm text-violet-400">
                  <Receipt size={16} />
                  Average Balance Past 90 Days
                </span>
                <div className="flex justify-between items-end mt-auto w-full">
                  <span className="text-3xl font-medium">$76,890,28</span>
                  <span className="flex items-center gap-1 text-teal-500">
                    <TrendingUp size={16} />
                    0.30%
                  </span>
                </div>
              </div>
              <button className="col-span-full md:col-span-2 flex flex-col justify-center items-center gap-2 min-w-40 h-[125px] rounded-2xl bg-gradient-to-b from-violet-800 to-violet-400">
                <ClipboardList size={32} />
                See All Supports
              </button>
            </div>
            <div className="flex flex-col text-center items-center gap-10 flex-1 bg-no-repeat md:bg-cover bg-[url('../../public/assets/blury.svg')]">
              <p className="text-violet-500">Meet MoneyMind</p>
              <h2 className="text-2xl md:text-4xl text-white font-thin capitalize my-8 md:my-0">
                Empower your finances with MoneyMind
                <br /> navigating financial freedom
              </h2>
              <span className="hidden md:flex justify-center items-center w-12 h-12 rounded-full border border-white">
                <ArrowDown />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen max-w-[1440px] flex-col px-8 mx-auto">
        {/* Key Features */}
        <div className="flex flex-col my-32 gap-24">
          <div className="flex flex-col md:flex-row justify-around items-center gap-4">
            <div className="flex flex-col gap-4">
              <span className="text-violet-500">Key Features</span>
              <h2 className="text-4xl font-semibold capitalize leading-normal text-slate-900">
                Key Features for Enhanced
                <br />
                Financial Control
              </h2>
              <Image src={keyFeaturesImg} alt="" height={600} />
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-zinc-500">
                Discover ManageFin&apos;s Comprehensive Features, From
                <br />
                Effortless Expense Tracking And Proactive Budget Planning
                <br />
                To Savings Goal Visualization And Bill Payment Reminders.
              </p>
              <ul className="flex flex-col gap-8">
                <li className="flex items-center bg-sky-800 bg-opacity-10 w-full h-20 p-6 gap-2 rounded-xl">
                  <CheckCircle2 size={24} fill="#4f46e5" color="#fff" />
                  Expensive Tracking Made Easy
                </li>
                <li className="flex items-center bg-sky-800 bg-opacity-10 w-full h-20 p-6 gap-2 rounded-xl">
                  <CheckCircle2 size={24} fill="#4f46e5" color="#fff" />
                  Budget Planning And Monitoring
                </li>
                <li className="flex items-center bg-sky-800 bg-opacity-10 w-full h-20 p-6 gap-2 rounded-xl">
                  <CheckCircle2 size={24} fill="#4f46e5" color="#fff" />
                  Savings Goal Tracker
                </li>
                <li className="flex items-center bg-sky-800 bg-opacity-10 w-full h-20 p-6 gap-2 rounded-xl">
                  <CheckCircle2 size={24} fill="#4f46e5" color="#fff" />
                  Bill Payment Reminders
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* How It Works */}
        <div className="flex flex-col my-32">
          <div className="flex flex-col md:flex-row justify-around items-center gap-10">
            <div className="order-2 md:order-1 flex flex-col gap-8">
              <p className="text-zinc-500">
                Explore The Practical Steps Of Signing Up, Expense Tracking,
                <br /> Budgeting, And Data Security. Experience Seamless
                Cross-Device
                <br />
                Syncing And Gain Insightful Financial Empowerment.
              </p>
              <ul className="flex flex-col gap-8">
                <li className="flex items-center bg-sky-800 bg-opacity-10 w-full h-20 p-6 gap-2 rounded-xl">
                  <CheckCircle2 size={24} fill="#4f46e5" color="#fff" />
                  Sign Up And Personalize
                </li>
                <li className="flex items-center bg-sky-800 bg-opacity-10 w-full h-20 p-6 gap-2 rounded-xl">
                  <CheckCircle2 size={24} fill="#4f46e5" color="#fff" />
                  Start Tracking Expenses
                </li>
                <li className="flex items-center bg-sky-800 bg-opacity-10 w-full h-20 p-6 gap-2 rounded-xl">
                  <CheckCircle2 size={24} fill="#4f46e5" color="#fff" />
                  Set Budgets And Goals
                </li>
                <li className="flex items-center bg-sky-800 bg-opacity-10 w-full h-20 p-6 gap-2 rounded-xl">
                  <CheckCircle2 size={24} fill="#4f46e5" color="#fff" />
                  Stay Informed And Secure
                </li>
              </ul>
            </div>
            <div className="order-1 flex flex-col gap-4">
              <span className="text-violet-500">How It Works</span>
              <h2 className="text-4xl font-semibold capitalize leading-normal text-slate-900">
                Seamless financial
                <br />
                management in action
              </h2>
              <Image src={howWorksImg} alt="" height={600} />
            </div>
          </div>
        </div>
        {/* Why Choose Us */}
        <div className="flex flex-col my-32 gap-10">
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <span className="text-violet-500">Why?</span>
              <h2 className="text-4xl font-semibold capitalize leading-normal text-slate-900">
                Why choose MoneyMind?
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-zinc-500">
                Delve Into The Reasons That Set ManageFin Apart As Your Premier
                Choice For Financial
                <br /> Management. From Its User-Friendly Interface And
                Real-Time Cross-Device Synchronization To
                <br /> Its Intelligent Insights And Dedicated Customer Support.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image src={mobilesImg} alt="" height={300} />
            <Image src={customerServiceImg} alt="" height={300} />
          </div>
          <ul className="flex flex-col md:flex-row justify-between items-center gap-8">
            <li className="flex items-center bg-sky-800 bg-opacity-10 w-full h-20 p-6 gap-2 rounded-xl">
              <CheckCircle2 size={24} fill="#4f46e5" color="#fff" />
              Smart Financial Insights
            </li>
            <li className="flex items-center bg-sky-800 bg-opacity-10 w-full h-20 p-6 gap-2 rounded-xl">
              <CheckCircle2 size={24} fill="#4f46e5" color="#fff" />
              Real-Time Sync Across Devices
            </li>
            <li className="flex items-center bg-sky-800 bg-opacity-10 w-full h-20 p-6 gap-2 rounded-xl">
              <CheckCircle2 size={24} fill="#4f46e5" color="#fff" />
              Dedicated Customer Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-stretch my-32 md:h-[600px] p-6 md:p-16 rounded-3xl bg-black text-white bg-no-repeat bg-cover bg-[url('../../public/assets/pattern.svg')]">
          <div className="flex flex-col gap-10">
            <span className="text-violet-500">Use Cases</span>
            <h2 className="text-2xl md:text-4xl font-bold capitalize leading-thin">
              How users can benefit from
              <br /> the MoneyMind app
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <span className="flex justify-center items-center w-20 h-20 rounded-xl bg-violet-500">
                <LineChart size={32} />
              </span>
              <div className="flex flex-col gap-2">
                <strong>Effortless Expense Tracking</strong>
                <p className="text-zinc-400">
                  Individuals can effortlessly track their
                  <br /> daily expenses and gain insights.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <span className="flex justify-center items-center w-20 h-20 rounded-xl bg-violet-500">
                <WalletCards size={32} />
              </span>
              <div className="flex flex-col gap-2">
                <strong>Proactive Budget Planning</strong>
                <p className="text-zinc-400">
                  Families can create personalized budgets
                  <br />
                  for various categories.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-col md:flex-row gap-8">
              <span className="flex justify-center items-center w-20 h-20 rounded-xl bg-violet-500">
                <Gamepad2 size={32} />
              </span>
              <div className="flex flex-col gap-2">
                <strong>Saving Goal Achievement</strong>
                <p className="text-zinc-400">
                  Whether saving for a vacation, or a major
                  <br /> purchase, We are able to set specific savings goal.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <span className="flex justify-center items-center w-20 h-20 rounded-xl bg-violet-500">
                <Lightbulb size={32} />
              </span>
              <div className="flex flex-col gap-2">
                <strong>Small Business Finance Management</strong>
                <p className="text-zinc-400">
                  Small business owners can benefit from
                  <br /> MoneyMind features.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <span className="flex justify-center items-center w-20 h-20 rounded-xl bg-violet-500">
                <CircleDollarSign size={32} />
              </span>
              <div className="flex flex-col gap-2">
                <strong>Timely Bill Payment</strong>
                <p className="text-zinc-400">
                  MoneyMind prevents missed bill payments by
                  <br /> sending reminders before due dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black md:h-[300px] text-white">
        <div className="max-w-[1440px] flex flex-col w-11/12 p-8 mx-auto gap-6 h-full">
          <span className="font-bold text-xl">
            Money<span className="text-violet-500">Mind</span>
          </span>
          <p className="leading-normal">
            Accelerate your financial freedom with MoneyMind
          </p>
          <div className="mt-auto flex justify-between items-center border-t border-gray-900 pt-4">
            <span> &copy; 2023 All Rights Reserved</span>
            <ul className="flex justify-between items-center gap-4 text-white">
              <li className="flex justify-center items-center bg-white text-black p-2 rounded-full cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/gabriel--vicente/"
                  target="_blank"
                >
                  <Linkedin size={20} />
                </a>
              </li>
              <li className="flex justify-center items-center bg-white text-black p-2 rounded-full cursor-pointer">
                <a href="https://github.com/hastalamuerteg" target="_blank">
                  <Github size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
