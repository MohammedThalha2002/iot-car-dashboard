"use client";
import { useEffect, useState } from "react";
import DateTime from "@/components/DateTime";
import Acceleration from "@/components/Acceleration";
import Brake from "@/components/Brake";
import BPM from "@/components/BPM";
import EAR from "@/components/EAR";
import SeatBelt from "@/components/SeatBelt";
import { db } from "@/firebase/config";
import { onValue, ref } from "firebase/database";

export default function Home() {
  const [data, setData] = useState({
    acceleration: "low",
    bpm: 75,
    brake: "med",
    ear: 1,
    seatbelt: true,
  });

  useEffect(() => {
    const query = ref(db, "sensor-values");
    return onValue(query, (snapshot) => {
      if (snapshot.exists()) {
        const val = snapshot.val();
        console.log(val);
        setData(val);
      }
    });
  }, []);

  return (
    <main className="bg-black h-screen w-screen flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1339}
        height={686}
        fill="none"
      >
        <g clipPath="url(#a)">
          <rect width={1339} height={686} fill="#202020" rx={214} />
          <g filter="url(#b)">
            <path
              fill="url(#c)"
              d="M263.203 68.263 210.938 18h918.802l-52.27 50.263a98.839 98.839 0 0 1-68.52 27.602H331.725a98.856 98.856 0 0 1-68.522-27.602Z"
              shapeRendering="crispEdges"
            />
          </g>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M1231.24 183.927c4.83 0 8.75-3.915 8.75-8.746 0-4.83-3.92-8.745-8.75-8.745s-8.74 3.915-8.74 8.745c0 4.831 3.91 8.746 8.74 8.746Zm0 3.498c6.77 0 12.25-5.481 12.25-12.244 0-6.762-5.48-12.243-12.25-12.243-6.76 0-12.24 5.481-12.24 12.243 0 6.763 5.48 12.244 12.24 12.244Zm-12.94-24.137c.77.58.92 1.677.34 2.449a15.702 15.702 0 0 0-3.14 9.445 15.7 15.7 0 0 0 3.14 9.444 1.75 1.75 0 0 1-.34 2.449 1.75 1.75 0 0 1-2.45-.348 19.136 19.136 0 0 1-3.85-11.545c0-4.33 1.43-8.33 3.85-11.546a1.75 1.75 0 0 1 2.45-.348Zm25.88 0a1.75 1.75 0 0 1 2.45.348 19.137 19.137 0 0 1 3.85 11.546c0 4.329-1.43 8.329-3.85 11.545a1.75 1.75 0 0 1-2.45.348 1.75 1.75 0 0 1-.34-2.449 15.7 15.7 0 0 0 3.14-9.444c0-3.546-1.17-6.814-3.14-9.445a1.75 1.75 0 0 1 .34-2.449Zm-13.85 13.598h1.83c.77 0 1.44-.127 2-.382s.99-.617 1.28-1.087c.3-.469.45-1.024.45-1.667 0-.633-.15-1.195-.45-1.687-.29-.492-.72-.877-1.28-1.155-.56-.282-1.23-.424-2-.424h-3.88v9.949h2.05v-3.547Zm0-1.598v-3.198h1.83c.39 0 .71.077.95.232.25.155.43.36.54.615.12.255.17.531.17.827 0 .292-.05.553-.17.786-.11.232-.29.414-.54.546-.24.128-.56.192-.95.192h-1.83ZM1198.74 129.771c4.83 0 8.75-3.916 8.75-8.746s-3.92-8.745-8.75-8.745-8.74 3.915-8.74 8.745c0 4.83 3.91 8.746 8.74 8.746Zm0 3.498c6.77 0 12.25-5.482 12.25-12.244s-5.48-12.244-12.25-12.244c-6.76 0-12.24 5.482-12.24 12.244s5.48 12.244 12.24 12.244Zm-12.94-24.137c.77.58.92 1.677.34 2.449a15.699 15.699 0 0 0-3.14 9.444c0 3.546 1.17 6.814 3.14 9.445a1.75 1.75 0 0 1-.34 2.449 1.75 1.75 0 0 1-2.45-.348 19.137 19.137 0 0 1-3.85-11.546c0-4.329 1.43-8.329 3.85-11.545a1.75 1.75 0 0 1 2.45-.348Zm25.88 0a1.75 1.75 0 0 1 2.45.348 19.136 19.136 0 0 1 3.85 11.545c0 4.33-1.43 8.33-3.85 11.546a1.75 1.75 0 0 1-2.45.348 1.75 1.75 0 0 1-.34-2.449 15.702 15.702 0 0 0 3.14-9.445c0-3.546-1.17-6.813-3.14-9.444a1.75 1.75 0 0 1 .34-2.449Zm-7.13 13.451c.02.091.03.192.03.303 0 .134-.02.254-.06.359a.584.584 0 0 1-.22.252c-.09.063-.23.094-.39.094-.15 0-.27-.019-.39-.056a.777.777 0 0 1-.28-.175.726.726 0 0 1-.17-.316 1.695 1.695 0 0 1-.06-.482h-1.25c0 .353.06.659.17.918.11.256.26.468.46.636.19.165.42.289.67.372.26.079.53.119.82.119.3 0 .56-.041.8-.124.24-.082.45-.199.62-.35.17-.154.3-.336.39-.546.09-.214.14-.45.14-.709 0-.262-.04-.496-.11-.701a1.896 1.896 0 0 0-.33-.551 2.541 2.541 0 0 0-.54-.444 5.038 5.038 0 0 0-.75-.367 4.295 4.295 0 0 1-.4-.175c-.12-.06-.23-.121-.32-.184a.926.926 0 0 1-.2-.217.53.53 0 0 1-.08-.278c0-.137.03-.259.08-.367a.54.54 0 0 1 .23-.261c.1-.065.23-.098.39-.098.17 0 .31.039.42.115.11.077.19.184.24.321.05.133.07.289.07.465h1.25c0-.373-.08-.703-.24-.991a1.768 1.768 0 0 0-.68-.679c-.29-.165-.64-.247-1.04-.247-.29 0-.56.041-.79.124-.24.082-.45.2-.62.354a1.44 1.44 0 0 0-.41.547c-.1.213-.14.451-.14.713 0 .267.05.501.15.7.1.197.24.367.41.513.17.145.37.273.58.384.22.108.44.211.67.307.2.083.36.163.47.239.13.077.22.154.28.231.07.077.11.161.13.252Zm-10.06-4.279H1193.35l-1.94 6.218h1.32l.33-1.281h1.72l.34 1.281h1.33l-1.96-6.218Zm.02 3.899h-1.18l.59-2.236.59 2.236Zm3.78 1.285v-1.678h.85c.16 0 .29.036.38.107.09.068.16.168.2.299.04.131.06.284.06.461 0 .157-.02.296-.06.418a.601.601 0 0 1-.23.287.67.67 0 0 1-.4.106h-.8Zm2.01-2.246a.801.801 0 0 1-.13.073c.11.032.21.079.3.141.2.136.34.316.43.538.09.219.13.452.13.7 0 .399-.07.735-.22 1.008-.15.27-.37.475-.66.615-.29.136-.64.205-1.06.205h-2.05v-6.218h1.92c.31 0 .58.034.83.103.24.068.45.172.62.311.17.14.3.316.39.53.09.213.14.465.14.756 0 .256-.05.492-.16.709-.1.216-.26.393-.48.529Zm-.94-.423a.91.91 0 0 1-.42.086h-.65v-1.563h.67c.17 0 .31.027.42.081.11.054.19.139.23.256.05.114.08.266.08.457 0 .165-.03.306-.08.423a.599.599 0 0 1-.25.26ZM1250.42 236.63c4.83 0 8.75-3.915 8.75-8.745 0-4.831-3.92-8.746-8.75-8.746s-8.74 3.915-8.74 8.746c0 4.83 3.91 8.745 8.74 8.745Zm0 3.498c6.77 0 12.25-5.481 12.25-12.243 0-6.763-5.48-12.244-12.25-12.244-6.76 0-12.24 5.481-12.24 12.244 0 6.762 5.48 12.243 12.24 12.243Zm-12.94-24.137c.77.58.92 1.677.34 2.449a15.702 15.702 0 0 0-3.14 9.445c0 3.546 1.17 6.813 3.14 9.444a1.75 1.75 0 0 1-.34 2.449 1.75 1.75 0 0 1-2.45-.348 19.136 19.136 0 0 1-3.85-11.545c0-4.33 1.43-8.33 3.85-11.546a1.75 1.75 0 0 1 2.45-.348Zm25.88 0a1.75 1.75 0 0 1 2.45.348 19.137 19.137 0 0 1 3.85 11.546c0 4.329-1.43 8.329-3.85 11.545a1.75 1.75 0 0 1-2.45.348 1.75 1.75 0 0 1-.34-2.449 15.699 15.699 0 0 0 3.14-9.444c0-3.546-1.17-6.814-3.14-9.445a1.75 1.75 0 0 1 .34-2.449Zm-11.87 14.144.29-8.635h-2.63l.29 8.635h2.05Zm-2.03 1.768c-.25.239-.37.54-.37.905 0 .353.12.652.37.897.26.244.59.367 1.01.367.42 0 .76-.123 1.01-.367.25-.245.37-.544.37-.897 0-.365-.12-.666-.37-.905-.25-.245-.59-.368-1.01-.368-.42 0-.75.123-1.01.368Z"
            clipRule="evenodd"
            opacity={0.4}
          />
          <g strokeLinecap="square" strokeWidth={4.063}>
            <path stroke="url(#d)" d="m632.076 399.203-85.99 268.802" />
            <path stroke="url(#e)" d="m708.589 399.203 85.989 268.802" />
          </g>
          <path
            fill="#E9ED26"
            fillRule="evenodd"
            d="M169.858 104.539c-.502-.864-.095-1.915.908-2.347l4.063-1.749c1.003-.432 2.223-.082 2.725.782.501.864.095 1.915-.909 2.347l-4.062 1.749c-1.004.432-2.224.082-2.725-.782Zm-23.016-2.526a2.67 2.67 0 0 0-1.764.656 3.167 3.167 0 0 0-.689.875c-.294.535-.504 1.198-.66 1.88-.318 1.394-.499 3.263-.499 5.335s.181 3.941.499 5.335c.156.682.366 1.345.66 1.88.145.264.362.59.689.875a2.67 2.67 0 0 0 1.764.656c.948 0 2.818-.415 4.462-1.707 1.745-1.37 3.098-3.611 3.098-7.039 0-3.428-1.353-5.669-3.098-7.04-1.644-1.291-3.514-1.706-4.462-1.706Zm.451 8.746c0-1.926.17-3.556.423-4.66.022-.1.045-.192.068-.278.243.115.513.271.783.483.8.629 1.773 1.886 1.773 4.455s-.973 3.826-1.773 4.455c-.27.212-.54.368-.783.483a6.346 6.346 0 0 1-.068-.278c-.253-1.104-.423-2.734-.423-4.66Zm.789-5.753-.005.007a.04.04 0 0 1 .005-.007Zm-.001 11.505.001.001-.005-.007.004.006Zm15.913-14.498c.835 0 1.43.365 1.764.656.327.284.544.611.689.875.294.535.504 1.198.66 1.88.318 1.394.498 3.263.498 5.335s-.18 3.941-.498 5.335c-.156.682-.366 1.345-.66 1.88-.145.264-.362.59-.689.875a2.67 2.67 0 0 1-1.764.656c-.949 0-2.818-.415-4.462-1.707-1.745-1.37-3.098-3.611-3.098-7.039 0-3.428 1.353-5.669 3.098-7.04 1.644-1.291 3.513-1.706 4.462-1.706Zm-.451 8.746c0-1.926-.171-3.556-.423-4.66a6.346 6.346 0 0 0-.068-.278 4.124 4.124 0 0 0-.783.483c-.8.629-1.773 1.886-1.773 4.455s.973 3.826 1.773 4.455c.27.212.54.368.783.483.023-.086.046-.178.068-.278.252-1.104.423-2.734.423-4.66Zm-.789-5.753Zm0 11.506.005-.007-.005.007Zm6.887-5.765c0-.966.909-1.749 2.031-1.749h4.062c1.122 0 2.032.783 2.032 1.749 0 .966-.91 1.749-2.032 1.749h-4.062c-1.122 0-2.031-.783-2.031-1.749Zm-30.473-1.749c1.122 0 2.031.783 2.031 1.749 0 .966-.909 1.749-2.031 1.749h-4.063c-1.121 0-2.031-.783-2.031-1.749 0-.966.91-1.749 2.031-1.749h4.063Zm.91-6.806c1.003.432 1.41 1.483.908 2.347-.502.864-1.722 1.214-2.725.782l-4.063-1.749c-1.003-.432-1.41-1.483-.908-2.347.502-.864 1.722-1.214 2.725-.782l4.063 1.749Zm29.78 14.772c-.502.864-.095 1.915.908 2.347l4.063 1.749c1.003.432 2.223.082 2.725-.782.501-.864.095-1.915-.909-2.347l-4.062-1.749c-1.004-.432-2.224-.082-2.725.782Zm-29.78 2.347c1.003-.432 1.41-1.483.908-2.347-.502-.864-1.722-1.214-2.725-.782l-4.063 1.749c-1.003.432-1.41 1.483-.908 2.347.502.864 1.722 1.214 2.725.782l4.063-1.749Z"
            clipRule="evenodd"
            opacity={0.5}
          />
          <path
            fill="#FFF7CD"
            fillRule="evenodd"
            d="m102.765 259.325.006-.003a1.44 1.44 0 0 0-1.175-2.627l.585 1.314a84.766 84.766 0 0 0-.587-1.313l-.002.001-.005.002-.014.006-.041.019c-.032.016-.075.036-.126.063a7.947 7.947 0 0 0-1.62 1.106c-.578.514-1.236 1.269-1.613 2.263l-1.248-.624c-.71-.355-1.509-.038-1.783.707-.274.746.08 1.639.79 1.994l2.192 1.096c.382 1.015 1.103 1.655 1.606 2.101l.056.05c.732.65.956.904.956 1.482 0 .501-.182.862-.6 1.374l-3.217-1.608c-.71-.356-1.509-.039-1.783.707s.08 1.638.79 1.994l2.43 1.215a4.515 4.515 0 0 0-.498 2.073c0 .728.164 1.349.407 1.879l-1.346-.673c-.71-.355-1.509-.039-1.783.707s.08 1.639.79 1.994l4.571 2.285a3.579 3.579 0 0 1-.708 1.037l-.018.017a1.439 1.439 0 0 0 1.921 2.143l-.956-1.076c.956 1.076.957 1.075.957 1.074l.002-.001.004-.004.01-.008.025-.024.073-.07a6.627 6.627 0 0 0 .859-1.068c.136-.212.276-.457.406-.733l1.488.744c.71.356 1.509.039 1.783-.707s-.08-1.638-.791-1.994l-1.991-.995a3.65 3.65 0 0 0-.674-1.508c-.305-.419-.697-.806-.997-1.103a16.12 16.12 0 0 0-.137-.135c-.704-.705-1.017-1.134-1.017-1.781 0-.29.061-.534.194-.787l3.63 1.815c.71.356 1.509.039 1.783-.707s-.08-1.639-.791-1.994l-2.798-1.399c.464-.683.86-1.557.86-2.683 0-.338-.036-.649-.098-.934l1.044.522c.71.355 1.509.039 1.783-.707s-.08-1.639-.791-1.994l-4.776-2.388c.113-.536.455-1.007.916-1.417a5.058 5.058 0 0 1 1.067-.719Zm-11.225.063c-.447-.64-1.203-1.38-2.305-1.38-1.028 0-3.817.415-6.394 2.015-2.667 1.655-5.116 4.6-5.116 9.495s2.45 7.84 5.116 9.496c2.577 1.599 5.366 2.015 6.395 2.015 1.101 0 1.857-.74 2.304-1.381.471-.676.835-1.563 1.116-2.536.568-1.966.896-4.627.896-7.594 0-2.967-.328-5.627-.896-7.593-.281-.974-.645-1.86-1.116-2.537Zm-1.649 3.336c.472 1.631.783 4.006.783 6.794 0 2.788-.311 5.164-.783 6.795-.238.825-.494 1.377-.712 1.69-.045.065-.082.11-.11.142-.76-.048-2.814-.399-4.71-1.576-1.969-1.222-3.756-3.313-3.756-7.051s1.787-5.828 3.756-7.05c1.896-1.177 3.95-1.528 4.71-1.577.028.032.065.078.11.143.218.313.474.864.712 1.69Zm-.889-1.896c0 .001.004.004.013.009a.063.063 0 0 0-.013-.009Zm0 17.38c0 .001.005-.002.013-.009a.074.074 0 0 0-.013.009Z"
            clipRule="evenodd"
            opacity={0.3}
          />
          <g fill="#32D74B" clipPath="url(#f)">
            <path
              fillRule="evenodd"
              d="M111.953 140.271a.88.88 0 0 1 .88-.88h5.282a.88.88 0 0 1 .88.88v4.213a9.742 9.742 0 0 1 6.163 9.076c0 5.378-4.335 9.739-9.683 9.739-5.347 0-9.682-4.361-9.682-9.739a9.741 9.741 0 0 1 6.16-9.075v-4.214Zm3.522 19.486c3.403 0 6.162-2.775 6.162-6.197 0-3.423-2.759-6.198-6.162-6.198s-6.161 2.775-6.161 6.198c0 3.422 2.758 6.197 6.161 6.197Zm-.88 6.188a.88.88 0 0 0-.88.881v3.551a.88.88 0 0 0 .88.881h1.76a.88.88 0 0 0 .881-.881v-3.551a.88.88 0 0 0-.881-.881h-1.76Zm8.951-1.774a.887.887 0 0 1 0-1.248l1.249-1.256a.873.873 0 0 1 1.241 0l2.493 2.508a.885.885 0 0 1 0 1.248l-1.248 1.256a.873.873 0 0 1-1.241 0l-2.494-2.508Zm-17.39-2.5a.873.873 0 0 0-1.241 0l-2.494 2.508a.887.887 0 0 0 0 1.248l1.249 1.256a.873.873 0 0 0 1.241 0l2.493-2.508a.885.885 0 0 0 0-1.248l-1.248-1.256Zm17.39-18.741a.888.888 0 0 0 0 1.249l1.249 1.256a.875.875 0 0 0 1.241 0l2.493-2.508a.887.887 0 0 0 0-1.249l-1.248-1.255a.873.873 0 0 0-1.241 0l-2.494 2.507Zm-17.39 2.5a.873.873 0 0 1-1.241 0l-2.494-2.507a.888.888 0 0 1 0-1.249l1.249-1.256a.875.875 0 0 1 1.241 0l2.493 2.508a.887.887 0 0 1 0 1.249l-1.248 1.255Zm21.645 7.231a.88.88 0 0 1 .88-.88h3.521a.88.88 0 0 1 .88.88v1.782a.88.88 0 0 1-.88.88h-3.521a.88.88 0 0 1-.88-.88v-1.782Zm-29.05-.88a.88.88 0 0 0-.88.88v1.782c0 .486.394.88.88.88h3.521a.88.88 0 0 0 .88-.88v-1.782a.88.88 0 0 0-.88-.88h-3.52Z"
              clipRule="evenodd"
            />
            <text
              xmlSpace="preserve"
              fontFamily="Inter"
              fontSize={10.563}
              fontWeight={200}
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
            >
              <tspan x={101.477} y={182.232}>
                {"AUTO"}
              </tspan>
            </text>
          </g>
          <g fill="#32D74B">
            <path d="m93.895 214.604-8.992 2.248a1.44 1.44 0 0 0 .698 2.792l8.352-2.089a33.028 33.028 0 0 1-.045-.886v-.018l-.021-.844v-.873l.008-.33ZM94.066 218.877l-9.163 2.291a1.44 1.44 0 0 0 .698 2.792l8.932-2.233a24.977 24.977 0 0 1-.467-2.85ZM95.333 224.316l-10.43 2.608a1.438 1.438 0 1 0 .698 2.791l11.302-2.825c-.639-.687-1.135-1.551-1.51-2.429a9.72 9.72 0 0 1-.06-.145ZM96.89 203.865a1.433 1.433 0 0 0-.477.038l-11.51 2.877a1.44 1.44 0 0 0 .698 2.792l9.436-2.359c.111-.325.23-.637.357-.934.371-.872.863-1.729 1.495-2.414ZM94.3 210.186l-9.397 2.349a1.44 1.44 0 0 0 .698 2.792l8.349-2.087a28.52 28.52 0 0 1 .35-3.054Z" />
            <path
              fillRule="evenodd"
              d="M95.346 214.125c.214-5.732 1.905-10.265 4.613-10.265 1.685 0 4.57.692 6.892 1.978 3.569 1.977 5.738 5.142 5.738 9.532s-2.169 7.555-5.738 9.532c-2.322 1.286-5.207 1.979-6.892 1.979-2.708 0-4.4-4.534-4.613-10.266l-.02-.826v-.838l.02-.826Zm10.111-5.769c-1.88-1.041-4.285-1.619-5.498-1.619l.048.002c.051.004.052.021.013.077l-.204.282c-.234.36-.473.882-.69 1.533-.58 1.741-.925 4.137-.925 6.739 0 2.602.345 4.999.925 6.739.253.759.537 1.344.806 1.7l.088.116c.039.056.037.073-.016.077l.196-.006c1.271-.067 3.495-.635 5.257-1.611 2.711-1.502 4.254-3.754 4.254-7.015 0-3.261-1.543-5.513-4.254-7.014Z"
              clipRule="evenodd"
            />
          </g>
          {/* DATETIME */}
          <DateTime />
          {/* ACCELARATION LEVELS */}
          <Acceleration acc={data.acceleration} />
          {/* BRAKE LEVELS */}
          <Brake brake={data.brake} />
          {/* SEATBELT */}
          <SeatBelt seatbelt={data.seatbelt} />
          {/* BPM VALUE */}
          <BPM bpm={data.bpm} />
          {/* EYE ASPECT RATIO */}
          <EAR ear={data.ear} />
        </g>
        <defs>
          <filter
            id="b"
            width={1021.72}
            height={180.784}
            x={159.479}
            y={-19.917}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={13.542} />
            <feGaussianBlur stdDeviation={25.729} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.7 0 0 0 0.1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_202_3"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_202_3"
              result="shape"
            />
          </filter>
          <filter
            id="g"
            width={289.202}
            height={265.367}
            x={40.047}
            y={515.499}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={31.78} />
            <feGaussianBlur stdDeviation={60.383} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.7 0 0 0 0.1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_202_3"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_202_3"
              result="shape"
            />
          </filter>
          <filter
            id="h"
            width={289.202}
            height={265.367}
            x={90.899}
            y={515.499}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={31.78} />
            <feGaussianBlur stdDeviation={60.383} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.7 0 0 0 0.1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_202_3"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_202_3"
              result="shape"
            />
          </filter>
          <filter
            id="i"
            width={289.202}
            height={265.367}
            x={141.739}
            y={515.499}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={31.78} />
            <feGaussianBlur stdDeviation={60.383} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.7 0 0 0 0.1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_202_3"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_202_3"
              result="shape"
            />
          </filter>
          <filter
            id="k"
            width={289.202}
            height={265.367}
            x={708.563}
            y={515.507}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={31.78} />
            <feGaussianBlur stdDeviation={60.383} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.7 0 0 0 0.1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_202_3"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_202_3"
              result="shape"
            />
          </filter>
          <filter
            id="l"
            width={289.202}
            height={265.367}
            x={759.422}
            y={515.507}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={31.78} />
            <feGaussianBlur stdDeviation={60.383} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.7 0 0 0 0.1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_202_3"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_202_3"
              result="shape"
            />
          </filter>
          <filter
            id="m"
            width={289.202}
            height={265.367}
            x={810.258}
            y={515.507}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={31.78} />
            <feGaussianBlur stdDeviation={60.383} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.7 0 0 0 0.1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_202_3"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_202_3"
              result="shape"
            />
          </filter>
          <filter
            id="n"
            width={343.28}
            height={343.284}
            x={153.725}
            y={188.958}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={13.542} />
            <feGaussianBlur stdDeviation={25.729} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.7 0 0 0 0.1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_202_3"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_202_3"
              result="shape"
            />
          </filter>
          <linearGradient
            id="c"
            x1={670.339}
            x2={670.339}
            y1={18}
            y2={95.865}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#01EBD4" />
            <stop offset={1} stopColor="#212121" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="d"
            x1={589.081}
            x2={589.081}
            y1={399.203}
            y2={668.005}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.063} stopColor="#fff" stopOpacity={0} />
            <stop offset={1} stopColor="#fff" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient
            id="e"
            x1={751.583}
            x2={751.583}
            y1={399.203}
            y2={668.005}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.063} stopColor="#fff" stopOpacity={0} />
            <stop offset={1} stopColor="#fff" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient
            id="o"
            x1={412.031}
            x2={245.469}
            y1={265.133}
            y2={417.815}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#01E4E0" stopOpacity={0} />
            <stop offset={0.336} stopColor="#01E4E0" />
          </linearGradient>
          <clipPath id="a">
            <rect width={1339} height={686} fill="#fff" rx={214} />
          </clipPath>
          <clipPath id="f">
            <path fill="#fff" d="M97.863 138.445h35.208v47.531H97.863z" />
          </clipPath>
          <clipPath id="j">
            <path fill="#fff" d="M171.703 540.609h54.167v54.167h-54.167z" />
          </clipPath>
        </defs>
      </svg>
    </main>
  );
}
