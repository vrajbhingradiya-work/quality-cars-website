"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FiPlus } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { IoCarSportOutline as CarIcon } from "react-icons/io5";

export const Faqs = () => {
  const [selected, setSelected] = useState(TABS[0]);

  return (
    <section className="overflow-hidden bg-white px-4 py-12 text-black tracking-wider">
      <Heading />
      <Tabs selected={selected} setSelected={setSelected} />
      <Questions selected={selected} />
    </section>
  );
};

const Heading = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <span className="mb-8 bg-white text-black bg-clip-text font-medium text-transparent">
          {`Let's answer some questions`}
        </span>
        <span className="mb-8 text-5xl font-bold">FAQs</span>
      </div>

      {/* <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" /> */}
    </>
  );
};

const Tabs = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="relative z-10 grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-4 ">
      {TABS.map((tab) => (
        <button
          onClick={() => setSelected(tab)}
          className={` items-center w-full h-[80px] md:h-auto md:w-[200px] relative overflow-hidden whitespace-nowrap rounded-md border-[1px]  md:px-3 py-1.5 text-sm font-medium transition-colors duration-500 ${
            selected === tab
              ? "border-black text-slate-50"
              : "border-slate-600 bg-transparent text-black"
          }`}
          key={tab}
        >
          <span className="hidden md:flex relative z-10 text-xl w-full  justify-center  md:p-4">
            <CarIcon className="h-[20px] md:h-[35px] w-[20px] md:w-[35px]" />
          </span>
          <span className="relative z-10 text-lg md:text-xl px-2 text-center w-full">
            {tab}
          </span>
          <AnimatePresence>
            {selected === tab && (
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 0.5,
                  ease: "backIn",
                }}
                className="text-xl absolute inset-0 z-0 bg-gradient-to-r from-black/70 to-black"
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
};

const Questions = ({ selected }: { selected: string }) => {
  return (
    <div className="mx-auto mt-12 max-w-6xl">
      <AnimatePresence mode="wait">
        {Object.entries(QUESTIONS).map(([tab, questions]) => {
          return selected === tab ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: "backIn",
              }}
              className="space-y-6 "
              key={tab}
            >
              {questions.map((q, idx) => (
                <Question key={idx} {...q} />
              ))}
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </div>
  );
};

const Question = ({ question, answer }: QuestionType) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className={`rounded-xl border-[1px] border-slate-700 px-4 transition-colors text-xl ${
        open ? "bg-black" : "bg-white"
      }`}
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-4"
      >
        <span
          className={`text-left text-xl font-medium transition-colors ${
            open ? "text-slate-50" : "text-black/50"
          }`}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: {
              rotate: "45deg",
            },
            closed: {
              rotate: "0deg",
            },
          }}
        >
          <FiPlus
            className={`text-2xl transition-colors ${
              open ? "text-slate-50" : "text-slate-400"
            }`}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-400"
      >
        <p ref={ref}>{answer}</p>
      </motion.div>
    </motion.div>
  );
};

type QuestionType = {
  question: string;
  answer: string;
};

const TABS = [
  "Financing Car",
  "Buying Car",
  "Selling Car",
  "Payments Procedure",
  "About QC",
];

const QUESTIONS = {
  "Financing Car": [
    {
      question:
        "Does Quality Cars Offer Inhouse Financing Or They Work With Corporate Banks?",
      answer:
        "Quality Cars does not offer inhouse financing but we do provide you with finance facilities with all the major private banks and financing houses.",
    },
    {
      question:
        "How Long Can The Tenure For Financing Be Availed And Does The ROI Fluctuate Car To Car, Territory To Territory?",
      answer:
        "The tenure of financing varies from 2 to 5 years and is judged on the basis of manufacturing year to ownership serial. The ROI is also a part of the tenure of financing and is assessed on the same lines. Territory to territory for us is not a problem as we have financing agents all over the country to help facilitate the process.",
    },
    {
      question: "How Does One Gets Finance Done On These Pre-Owned Cars?",
      answer:
        "We have tie ups with all the private banks Pan India like ICICI Bank, HDFC Bank, IndusInd Bank, Yes Bank, BMW Financial where in 80% can be financed of the deal value for a tenure of 5 years at diminishing interest rate of 11.50% within 3-4 working days.",
    },
    {
      question: "Is There Doorstep Service & Insurance Renewal Assistance?",
      answer:
        "Yes any car which is purchased from Quality Cars will have Pan India assistance. In case your car is due with service you just need to call your designated sales manager and he would arrange regular car service cost break up sheet as per your car variant and model after we receive 50% advance for the service cost. Our team will fly down with all the required equipment's/gadgets to service your car at your doorstep. Before the date of expiry of your existing insurance you will automatically get a call from our sales manager along with a renewal quote with best of the discounts possible with maximum risk coverage and fast claim procedures and car inspection Pan India.",
    },
  ],
  "Buying Car": [
    {
      question: "Does Quality Cars Offer Cars For Lease?",
      answer:
        "We at Quality Cars deal only in selling & purchasing of premium and exotic luxury cars. We do not offer our cars for rental or leasing purpose.",
    },
    {
      question: "Do We Offer PAN India Delivery?",
      answer:
        "We are known to be the best in business because of our fast and safe delivery process. We have a team dedicatedly working on new ways to deliver your car safely and in an efficient manner. We use closed body container and specialized trucks for exotic cars to be transported.",
    },
    {
      question: "How Do You Deliver The Cars Pan India?",
      answer:
        "We have a fleet of closed body containers which are ready and on the go along with trained pilots specialized for these heavy duty closed body containers and specialized trucks. We have a strong logistics department which makes sure the deadlines are met.",
    },
    {
      question:
        "On A Special Request Can A Delivery Experience Be Enhanced, For Example: Mother's Birthday Or Gifting A Car To Father On His Retirement Date?",
      answer:
        "We love working closely with our clients and treat them as a part of our family. We are overjoyed whenever there is a customer who wants to do something special for his loved ones and we are glad to be a part of this process. Our marketing team works closely with the clients to bring their ideas and dream delivery to reality. We capture these special moments and publish them on our Instagram handle for you to relive the experience.",
    },
    {
      question:
        "Do The Demo/Brand New Car Offered Under Quality Cars Have Company Warranty On Them?",
      answer:
        "Yes, any brand new car or demo car being offered will have a company warranty with them. But in some cases, if they don't, we at Quality Cars have our own warranty of 6 months on engine and transmission. If there are any issues in the components related to engine and transmission we don't fix the part we replace it completely for a stress-free ownership. We are proud of being the first ones and the only ones who offer a dedicated guarantee for the product we offer. You can further extend the warranty for 6 months or a year more.",
    },
    {
      question: "Can A Particular Car Be Arranged For Me? (Pre-Booking)?",
      answer:
        "We specialize in sourcing you your dream car. If there is any specific model in your mind or a particular color or registration state you would like, we can arrange them all. We take a timeline of 30 days in which our procurement team works on finding the exact products as per your specification and share the same with you. If you are satisfied with the options offered we move forward with the other financials but if not, your booking advance is 100% refundable.",
    },
    {
      question: "Why Is The Buy-Back Policy Only For One Year?",
      answer:
        "Buy back policy is a medium through which we give our clients the assurance that no matter how the product does on the market, if the market price falls or if the model gets discontinued by the manufacturer we are there to support you by giving you an assurance of taking the car back. With a fast emerging market we see today, where there are facelifts every year, having a one year buyback policy helps us protect the customer's interest plus we safeguard our investments in that particular product as well. Predicting the market 2 years down the line is not idealistic as we believe reason being - the fluctuating automobile market and the prices depending on the change in government norms and regulations.",
    },
    {
      question:
        "What If Existing Client Is Looking To Buy Another Car, Do The Terms Of Fixed Price Policy Remain The Same Or You Offer Any Discounts To Your Loyal Customers?",
      answer:
        "We are an organization based on values and ethics, we do not discriminate between our customers be it a repeat client or someone new. Our guidelines and principles are transparent therefore we have a strong customer base of almost 40,000+ customers who have faith in our policies. We are thankful to each and every customer who has helped us achieve the same.",
    },
    {
      question: "Can We Test Drive The Cars, Before Finalizing It?",
      answer:
        "One of the reasons we are able to maintain our machines in pristine condition is because of our policy of not offering test drives without an advance payment. We do not have any demo cars to offer a test drive. How would you feel if you get to know that the car you are considering has been driven by multiple people and for this many kms? It definitely ruins the complete experience with certain doubts arising. Not to worry, we offer you a way out where we help you take the test drive by transferring 10% of the deal value by which you have the chance to completely have a convincing test drive with our sales representative. They will give you a thorough walkaround of the features and different driving modes to help you choose better.",
    },
    {
      question:
        "Does The Cars Have History Of Any Accidental Records Or Meter Tampering?",
      answer:
        "We offer you a guarantee that all our cars are legally and physically genuine. We do not deal in cars which have a bad history or any legal issues. We offer you to even have the car checked with their respective brands for your complete satisfaction after the car is advanced.",
    },
    {
      question: "How Much Time Does It Take To Get The Car Transferred?",
      answer:
        "Working in a diverse country like India where all the RTO's have a different set of documents and process, we take 60 days from the date of purchase to transfer the car in that particular state in your name.",
    },
    {
      question:
        "Is It Possible To Drive Another State Registered Car In My City?",
      answer:
        "Every state has its own rules regarding other state registered cars. Though with the One country one border rule expected around the bend, most states allow various other state registered cars to ply. This resistance to other state cars plying has reduced considerably. Also very soon, a new rule is expected whereby a buyer can just pay a difference in road tax percentage wise and re-register if need. So it's advisable to drive an out state registered car with the existing registration and re-register in their own state once this rule comes into effect. Of course, keeping in mind the fact that the easiest and most economical way to drive a car is by retaining the existing registration of the car. It can later be transferred legally in the buyer's name in the same state. It is registered by means of a LIC policy and registered rental deed which various RTO agents of the state facilitate in a legal bound framework accepted by the RTO.",
    },
    {
      question:
        "Does Quality Cars Own The Cars I See Online Or Are They Owned By The Other Individuals / Dealers?",
      answer:
        "Quality Cars owns every car we sell as we don't work on park and sell facility. Complete stock which is listed on the website are 100% procured and will be physically available at our showrooms located Pan India.",
    },
    {
      question:
        "We Have Seen Quality Cars Selling Brand New /Unregistered Cars, Why Do Customers Buy Brand New Cars From Quality Cars And Not From The Showroom, Do You Provide More Discount On Such Vehicles?",
      answer:
        "We believe in customer service and our aim is to provide the best cars in the easiest way possible. And if we have the capability to do so, then why not? We are more than happy to fulfill our customer's requirements mainly as they are more comfortable buying cars from us. Our customers are looking for a one-stop solution therefore we buy inventories from manufacturers and dealers.",
    },
  ],
  "Selling Car": [
    {
      question: "How do we purchase cars Pan India?",
      answer:
        "We have the best procurement/purchase officers in the country who are working hard every day to get you close to your dream car. They are specialists who over the years have garnered the reputation of being car doctors. There is no information that can be missed by them, and they have a checkpoint-based system which consists of 150 checkpoints. This is how we control our quality, and that's how we get you authentic cars. If you have a car which you are willing to sell, call us and give us the location, our representative will be there in less than 24 hours.",
    },
    {
      question:
        "What are the parameters by which you evaluate a purchase of a car, which you offer for sale?",
      answer:
        "We dig deep into every car's history to rule out any car which comes with an accidental record, meter tampering, litigation case on car, criminal history of owner, etc. It also goes under 151 checkpoints as per the procurement process. There are a few checkpoints that why you should opt for Quality Cars for your next Car:\n\n- NCR Check\n- Zero Tolerance Policy\n- 2010 > 30000 kms\n- Strictly No Refurbished Cars\n- Service History Check\n- Insurance History Check\n- Buy Back Agreement\n- 6 Months or 15000/5000 kms warranty\n- RTO Physical file check",
    },
    {
      question:
        "What are the parameters by which Quality Cars evaluates purchase of a car that is offered for sale?",
      answer:
        "We dig deep into every car's history to rule out any car which comes with an accidental record, meter tampering, litigation case on car, criminal history of owner, etc. The car goes through 151 checkpoints as per the procurement process. Below are some checkpoints to answer 'why you should opt for Quality Cars for your next Supercar':\n\n- NCR Check\n- Zero Tolerance Policy\n- 2010 > 30000 kms\n- Strictly No Refurbished Cars\n- Service History Check\n- Insurance History Check\n- Buy Back Agreement\n- 6 Months or 15000/5000 kms warranty\n- RTO Physical file check",
    },
    {
      question: "Does Quality Cars fix unrepaired safety recalls?",
      answer:
        "Every car sold by Quality Cars comes with 151 checkpoints where a complete dedicated after-sales team is on the floor to make sure that the vehicle comes with complete track records and everything is functional. Before you purchase a car from Quality Cars, our sales consultant will review with you a Check-List report from our after-sales team and VIN-No for the car by which you can get the complete track record and previous service history checked from the authorized car dealership. There are few cars which come with previous dealership warranty valid on it so those cars get serviced at their respective dealership only. Those cars which are out of warranty get complete service assistance at Quality Cars Workshop with assistance to its reach over Pan-India.",
    },
  ],

  "Payments Procedure": [
    {
      question:
        "Is the booking amount refundable and are there any deductions?",
      answer:
        "Customer's booking amount is 100% refundable in case the deal doesn't happen for any reason. We don't keep advances as this helps our customers trust us more and be open for future transactions without any hesitation.",
    },
    {
      question: "Does Quality Cars offer any buy back and warranty assurance?",
      answer:
        "Yes, we do offer buy back assurance on vehicles sold by Quality Cars which are above 2010 model and driven less than 30,000kms. Buy Back Policy for Sedan/SUV: Drive the car for 15,000 km or 1 year. We will take the car back from you at 25% depreciation Buy Back Policy Sports/Coupe/Convertible: Drive the car for 5,000 km or 1 year. We will take the car back from you at 25% depreciation.",
    },
    {
      question: "What's the booking and balance payment procedure?",
      answer:
        "To book your vehicle we need a 10% of the booking amount which can be done via RTGS. After the booking amount is paid you have 7 days to complete the remaining payment. Once the booking amount is paid, you can take a test drive of the car. In case you are not satisfied with your choice the booking amount is 100% refundable within 30 days from the date of cancellation. The car will be ready for delivery once the total amount is paid.",
    },
  ],
  "About QC": [
    {
      question:
        "Are we allowed to take pictures & videos in the Quality Cars premises for vlog purpose or for social media?",
      answer:
        "Capturing pictures and videos from your personal cellphone or an iPad is permitted. Professional shooting equipment's, professional cameras and video vlogging are not permitted. However, we at Quality Cars have our dedicated media day on every Saturday in which you can first seek permission through email by our marketing team and then come and display your photography skills.",
    },
    {
      question:
        "How different is the experience of buying pre-used cars from Quality Cars compared to company certified pre used cars dealerships?",
      answer:
        "We at Quality Cars do our best in being as versatile as we can, this shows by our ground breaking policies (explained under a different FAQ) and the array of options on offer. In a company-owned pre-used dealership you are restricted to one brand, having to compare the cars side by side with other brands and models is a task as it is time consuming for you to move around showrooms trying to find the best suitable option. We are a one-stop shop where you can compare cars from all the luxury car brands which are on offer under one roof. For Example: Mercedes Benz S class vs BMW 730ld vs Audi A8 vs Maserati Quattro Porte, you can physically sit and feel each car individually to have a clear and a better understanding as to which one is tailor-made for your comfort and style, where else do you have this ease of buying?",
    },
    {
      question: "Do all the three stores have service facilities available?",
      answer:
        "We have our state-of-the-art workshop located in Gurgaon. Regarding our branches in Mumbai and Hyderabad we have special partners who help us cater our customer service and after sales respectively.",
    },
    {
      question: "Do we modify cars?",
      answer:
        "We do not have a dedicated body shop where we manufacture body kits and accessories but we do offer services where we can help source an after-market body kit or alloys which can be installed by our after sales team. We offer leather upgrade in terms of seats and interior where you can choose the interior color of your choice and we can help tailor-made for you.",
    },
    {
      question:
        "After sale parts are very difficult to source in these high end cars some of them which are discontinued how do we handle it?",
      answer:
        "We at Quality Cars have a dedicated workshop and after sales team who are ready to source you any part from anywhere in the world. We have a strong network with all the company-owned workshops and factories all across the world. Once you buy a car from us, there is no need to venture out trying to find a particular part or item, we are there for you!",
    },
    {
      question:
        "Why don't you deal in regular segments like Fortuners, C Classes, 3 Series etc.?",
      answer:
        "We are focusing on the niche market as of now. It's very tough to find low mileage and top notch quality standard cars in this segment. Hence, we generally avoid this segment. However, fewer times excellent quality standards cross our eye and we make sure to invest in them. For instance, cars like 2018-19 C class /Mercedes E- Class / 5 series.",
    },
    {
      question:
        "Do you have an app for Quality Cars? If no, are you guys planning to work on it?",
      answer:
        "As of now we do not have an app. Yes! Our team is working on the same. We are looking forward to create an application that is beneficial to our customers in terms of keeping a track of our inventories, updates on renewals and insurances, service updates and much more that will surely be worth the wait.",
    },
    {
      question: "Do you import?",
      answer:
        "We had imported cars in the past, as they were very less or no luxury car showrooms available in India. But today, we have almost all the luxury car showrooms therefore it doesn't make any sense to import. Indian duty structure does not favor as much, we are talking about 200%+!! Back then, we have imported X6 before BMW India, almost 90% of Maserati's and Lexus.",
    },
    {
      question:
        "Car showrooms provide great discounts and deals, why don't you guys do so?",
      answer:
        "We can't negotiate on the car's price because we don't negotiate on the quality of our product. There is no point inflating the car's price and further putting it down. Negotiation will always remain a hindrance between buyer and seller to develop a trust or relationship for further business. In case we negotiate, we can't go down on a certain benchmark price therefore we post the final prices on our website which is final for all the customers.",
    },
  ],
};
