import React, { useState } from "react";

type StepContent = {
  [key: number]: {
    title: string;
    description: string;
  };
};

export default function App() {
  const [step, setStep] = useState(1);
  const totalStep = 6;

  const stepContent: StepContent = {
    1: {
      title: "Let's Get Started",
      description: "Select your ADU size to begin.",
    },
    2: {
      title: "Choose Roof Style",
      description: "Select the roof style that fits your design.",
    },
    3: {
      title: "Customize Your ADU",
      description: "Choose the height and roof options.",
    },
    4: {
      title: "Interior Finishes",
      description: "Select your preferred interior finishes.",
    },
    5: {
      title: "Kitchen & Storage",
      description: "Choose your kitchen and storage options.",
    },
    6: {
      title: "Your ADU Estimate",
      description: "Review your selections and total price.",
    },
  };

  return (
    <div
      style={{
        background: "#fff",
        width: "650px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "150px auto",
        padding: "20px 20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ fontSize: "22px" }}>
            {" "}
            Step {step} of <b>{totalStep}</b>
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "420px",
              margin: "20px auto",
            }}
          >
            {Array.from({ length: totalStep }).map((_, index) => (
              <React.Fragment key={index}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: step > index ? "#0E2A5C" : "#fff",
                    border: step > index ? "none" : "3px solid #D5D8DE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "bold",
                    boxShadow:
                      step > index ? "0 4px 10px rgba(0,0,0,0.2)" : "none",
                  }}
                >
                  {step > index && "◆"}
                </div>

                {/* Line */}
                {index < totalStep - 1 && (
                  <div
                    style={{
                      flex: 1,
                      height: "3px",
                      background: step > index + 1 ? "#0E2A5C" : "#D5D8DE",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              margin: "5px 0",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "42px",
                fontWeight: "700",
                color: "#102A56",
              }}
            >
              {stepContent[step].title}
            </h1>

            <p
              style={{
                marginTop: "1px",
                fontSize: "18px",
                color: "#6B7280",
                lineHeight: "28px",
                maxWidth: "650px",
                marginInline: "auto",
              }}
            >
              {stepContent[step].description}
            </p>
          </div>

          <div style={{ width: "100%" }}>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}
            {step === 5 && <Step5 />}
            {step === 6 && <Step6 />}
          </div>
        </div>

        {step <= 5 && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "70px",
            }}
          >
            {/* Back */}
            <div>
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 24px",
                    background: "#fff",
                    border: "1px solid #E5E7EB",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#12254A",
                    boxShadow: "0 2px 10px rgba(0,0,0,.05)",
                  }}
                >
                  ← Back
                </button>
              )}
            </div>

            {/* Next */}
            <button
              onClick={() => setStep(step + 1)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                background: "#12254A",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: 600,
                boxShadow: "0 8px 20px rgba(18,37,74,.25)",
              }}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Step1() {
  const aduSizes = [
    {
      id: 1,
      size: "320 sqft",
      price: "$146,000",
    },
    {
      id: 2,
      size: "480 sqft",
      price: "$178,800",
    },
    {
      id: 3,
      size: "560 sqft",
      price: "$212,800",
    },
    {
      id: 4,
      size: "640 sqft",
      price: "$235,800",
    },
  ];

  const selected = 3;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "950px",
        margin: "0 auto",
      }}
    >
      {/* Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "18px",
        }}
      >
        {aduSizes.map((item) => {
          const active = item.id === selected;

          return (
            <div
              key={item.id}
              style={{
                width: "200px",
                height: "180px",
                borderRadius: "12px",
                border: active ? "2px solid #163A70" : "1px solid #D9E0EA",
                background: active ? "#F7F9FF" : "#fff",
                cursor: "pointer",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: ".3s",
              }}
            >
              {/* Selected Icon */}
              {active && (
                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#163A70",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  ✓
                </div>
              )}

              {/* SVG House */}
              <svg
                width="70"
                height="70"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 28L32 10L54 28"
                  stroke="#162B55"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path d="M15 25V54H49V25" stroke="#162B55" strokeWidth="2" />

                <rect
                  x="27"
                  y="36"
                  width="10"
                  height="18"
                  stroke="#162B55"
                  strokeWidth="2"
                />

                <rect
                  x="19"
                  y="32"
                  width="6"
                  height="6"
                  stroke="#162B55"
                  strokeWidth="2"
                />

                <rect
                  x="39"
                  y="32"
                  width="6"
                  height="6"
                  stroke="#162B55"
                  strokeWidth="2"
                />
              </svg>

              <div
                style={{
                  marginTop: "12px",
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#162B55",
                }}
              >
                {item.size}
              </div>

              <div
                style={{
                  marginTop: "8px",
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "#162B55",
                }}
              >
                {item.price}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tip */}
      <div
        style={{
          marginTop: "30px",
          padding: "20px 24px",
          borderRadius: "12px",
          background: "#EEF4FF",
          border: "1px solid #D8E6FF",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Bulb SVG */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 2.5 1.3 4.7 3.2 6v2h7.6v-2C17.7 13.7 19 11.5 19 9c0-3.87-3.13-7-7-7Z"
            stroke="#3764F4"
            strokeWidth="1.8"
          />
          <path
            d="M9 21h6"
            stroke="#3764F4"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M10 18h4"
            stroke="#3764F4"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>

        <div
          style={{
            color: "#2952A3",
            fontSize: "18px",
          }}
        >
          <strong>Tip:</strong> Larger ADUs offer more space and flexibility for
          your needs.
        </div>
      </div>
    </div>
  );
}

function Step2() {
  const [selectedRoof, setSelectedRoof] = useState("Gable");

  const roofTypes = [
    {
      id: 1,
      name: "Gable",
      price: "$0",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600",
    },
    {
      id: 2,
      name: "Flat",
      price: "$4,500",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "28px",
      }}
    >
      {roofTypes.map((roof) => {
        const active = selectedRoof === roof.name;

        return (
          <div
            key={roof.id}
            onClick={() => setSelectedRoof(roof.name)}
            style={{
              width: "260px",
              border: active ? "2px solid #163A70" : "1px solid #E3E7EE",
              borderRadius: "14px",
              background: "#fff",
              cursor: "pointer",
              position: "relative",
              transition: ".25s",
              overflow: "hidden",
            }}
          >
            {active && (
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "#163A70",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                ✓
              </div>
            )}

            <img
              src={roof.image}
              alt={roof.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div
              style={{
                padding: "18px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "#162B55",
                }}
              >
                {roof.name}
              </div>

              <div
                style={{
                  marginTop: "10px",
                  fontSize: "22px",
                  fontWeight: "500",
                  color: "#162B55",
                }}
              >
                {roof.price}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Step3() {
  return <div>Step 6 Code</div>;
}

function Step4() {
  return <div>Step 6 Code</div>;
}

function Step5() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "650px",
        margin: "30px auto",
      }}
    >
      {/* Label */}
      <label
        style={{
          display: "block",
          marginBottom: "10px",
          fontSize: "18px",
          fontWeight: "600",
          color: "#102A56",
        }}
      >
        Cabinets & Countertops
      </label>

      {/* Select */}
      <select
        style={{
          width: "100%",
          padding: "16px 18px",
          fontSize: "18px",
          border: "1px solid #D9DEE8",
          borderRadius: "10px",
          outline: "none",
          color: "#1F2937",
          background: "#fff",
          cursor: "pointer",
        }}
      >
        <option>KZ Kitchen and Prefab - $0</option>
        <option>Premium Cabinets - $2,500</option>
        <option>Luxury Cabinets - $5,000</option>
      </select>

      {/* Info Box */}
      <div
        style={{
          marginTop: "30px",
          background: "#EEF4FF",
          border: "1px solid #DCE8FF",
          borderRadius: "12px",
          padding: "24px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "56px",
            height: "56px",
            fontSize: "42px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          🏠
        </div>

        {/* Text */}
        <p
          style={{
            margin: 0,
            fontSize: "22px",
            color: "#2952A3",
            lineHeight: "34px",
            fontWeight: "500",
          }}
        >
          High-quality cabinets and countertops
          <br />
          enhance both style and functionality.
        </p>
      </div>
    </div>
  );
}

function Step6() {
  return <div>Step 6 Code</div>;
}
