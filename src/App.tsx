import React, { useState } from "react";

type StepContent = {
  [key: number]: {
    title: string;
    description: string;
  };
};

type AduSize = {
  id: number;
  size: string;
  price: string;
  priceAmount: number;
};

type Step1Props = {
  aduSizes: AduSize[];
  selected: number;
  onSelect: (item: AduSize) => void;
};

type RoofType = {
  id: number;
  name: string;
  price: string;
  image: string;
  priceAmount: number;
};

type Step2Props = {
  roofTypes: RoofType[];
  selectedRoof: string;
  onSelect: (roof: RoofType) => void;
};

type KitchenOption = {
  id: string;
  name: string;
  price: number;
};

type Step5Props = {
  kitchen: KitchenOption[];
  selectedKitchen: string;
  onSelectKitchen: (id: string) => void;
};

type Option = {
  id: string;
  name: string;
  price: number;
};

type Step4Props = {
  paint: Option[];
  flooring: Option[];
  bathroom: Option[];
  curtain: Option[];

  selectedPaint: string;
  selectedFlooring: string;
  selectedBathroom: string;
  selectedCurtain: string;

  onSelectPaint: (id: string) => void;
  onSelectFlooring: (id: string) => void;
  onSelectBathroom: (id: string) => void;
  onSelectCurtain: (id: string) => void;
};

type Step3Props = {
  heights: Option[];
  roofs: Option[];
  exteriors: Option[];

  selectedHeight: string;
  selectedRoof: string;
  selectedExterior: string;

  skylights: number;
  windows: number;
  appliancePackage: boolean;

  onSelectHeight: (id: string) => void;
  onSelectRoof: (id: string) => void;
  onSelectExterior: (id: string) => void;

  onSkylightsChange: (value: number) => void;
  onWindowsChange: (value: number) => void;
  onAppliancePackageChange: (value: boolean) => void;
};

type Step6Props = {
  aduSizePrice: number;
  roofStylePrice: number;
  heightPrice: number;
  roofOptionPrice: number;
  exteriorPrice: number;
  appliancePrice: number;
  skylightPrice: number;
  windowCountPrice: number;
  paintPrice: number;
  flooringPrice: number;
  bathroomPrice: number;
  curtainPrice: number;
  kitchenPrice: number;
};

export default function App() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(3);
  const [selectedRoof, setSelectedRoof] = useState("Gable");
  const [selectedKitchen, setSelectedKitchen] = useState("kz");
  const [selectedPaint, setSelectedPaint] = useState("paint1");
  const [selectedFlooring, setSelectedFlooring] = useState("floor1");
  const [selectedBathroom, setSelectedBathroom] = useState("bath1");
  const [selectedHeight, setSelectedHeight] = useState("height1");

  const [selectedRoofOption, setSelectedRoofOption] = useState("roof1");

  const [selectedExterior, setSelectedExterior] = useState("ext1");

  const [skylights, setSkylights] = useState(0);

  const [windowCount, setWindowCount] = useState(4);

  const [appliancePackage, setAppliancePackage] = useState(false);
  const [selectedCurtain, setSelectedCurtain] = useState("curtain1");
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

  const aduSizes = [
    {
      id: 1,
      size: "560 sqft",
      price: "$212,800",
      priceAmount: 212800,
    },
    {
      id: 2,
      size: "640 sqft",
      price: "$243,200",
      priceAmount: 243200,
    },
    {
      id: 3,
      size: "740 sqft",
      price: "$273,800",
      priceAmount: 273800,
    },
  ];

  const roofTypes = [
    {
      id: 1,
      name: "Gable",
      price: "$0",
      priceAmount: 0,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600",
    },
    {
      id: 2,
      name: "Shed",
      price: "$7,500",
      priceAmount: 7500,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
    },
  ];

  const kitchen = [
    {
      id: "kz",
      name: "KZ Kitchen and Prefab",
      price: 0,
    },
    {
      id: "island",
      name: "Kitchen Island",
      price: 3500,
    },
  ];

  const paint = [
    {
      id: "paint1",
      name: "One color, eggshell/flat",
      price: 0,
    },
    {
      id: "paint2",
      name: "2 colors or 2 sheen",
      price: 1000,
    },
    {
      id: "paint3",
      name: "3 colors or 3 sheen",
      price: 1500,
    },
  ];

  const flooring = [
    { id: "floor1", name: "LVP", price: 0 },
    { id: "floor2", name: "Engineering $6 - $10 per sq ft extra", price: 2500 },
  ];

  const bathroom = [
    { id: "bath1", name: "Tub with tiles", price: 0 },
    { id: "bath2", name: "Shower with tiles", price: 5000 },
  ];

  const curtain = [
    { id: "curtain1", name: "Curtain rod", price: 0 },
    { id: "curtain2", name: "Shower door", price: 2000 },
  ];

  const heights = [
    {
      id: "height1",
      name: "8 ft standard Gable",
      price: 0,
    },
    {
      id: "height2",
      name: "10 ft Gable",
      price: 3500,
    },
    {
      id: "height3",
      name: "12 ft Gable",
      price: 6500,
    },
  ];

  const roofs = [
    {
      id: "roof1",
      name: "30 Years shingles",
      price: 0,
    },
    {
      id: "roof2",
      name: "Metal Roof",
      price: 4500,
    },
  ];

  const exteriors = [
    {
      id: "ext1",
      name: "Horizontal siding",
      price: 0,
    },
    {
      id: "ext2",
      name: "Vertical siding",
      price: 2500,
    },
    {
      id: "ext3",
      name: "Stucco",
      price: 4000,
    },
  ];

  const aduSizePrice =
    aduSizes.find((item) => item.id === selected)?.priceAmount ?? 0;
  const roofStylePrice =
    roofTypes.find((item) => item.name === selectedRoof)?.priceAmount ?? 0;
  const heightPrice =
    heights.find((item) => item.id === selectedHeight)?.price ?? 0;
  const roofOptionPrice =
    roofs.find((item) => item.id === selectedRoofOption)?.price ?? 0;
  const exteriorPrice =
    exteriors.find((item) => item.id === selectedExterior)?.price ?? 0;
  const appliancePrice = appliancePackage ? 5000 : 0;
  const skylightPrice = skylights * 2500;
  const windowCountPrice = Math.max(0, (windowCount - 4) * 2000);
  const paintPrice =
    paint.find((item) => item.id === selectedPaint)?.price ?? 0;
  const flooringPrice =
    flooring.find((item) => item.id === selectedFlooring)?.price ?? 0;
  const bathroomPrice =
    bathroom.find((item) => item.id === selectedBathroom)?.price ?? 0;
  const curtainPrice =
    curtain.find((item) => item.id === selectedCurtain)?.price ?? 0;
  const kitchenPrice =
    kitchen.find((item) => item.id === selectedKitchen)?.price ?? 0;

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
            {step === 1 && (
              <Step1
                aduSizes={aduSizes}
                selected={selected}
                onSelect={(item) => setSelected(item.id)}
              />
            )}
            {step === 2 && (
              <Step2
                roofTypes={roofTypes}
                selectedRoof={selectedRoof}
                onSelect={(roof) => setSelectedRoof(roof.name)}
              />
            )}
            {step === 3 && (
              <Step3
                heights={heights}
                roofs={roofs}
                exteriors={exteriors}
                selectedHeight={selectedHeight}
                selectedRoof={selectedRoofOption}
                selectedExterior={selectedExterior}
                skylights={skylights}
                windows={windowCount}
                appliancePackage={appliancePackage}
                onSelectHeight={setSelectedHeight}
                onSelectRoof={setSelectedRoofOption}
                onSelectExterior={setSelectedExterior}
                onSkylightsChange={setSkylights}
                onWindowsChange={setWindowCount}
                onAppliancePackageChange={setAppliancePackage}
              />
            )}
            {step === 4 && (
              <Step4
                paint={paint}
                flooring={flooring}
                bathroom={bathroom}
                curtain={curtain}
                selectedPaint={selectedPaint}
                selectedFlooring={selectedFlooring}
                selectedBathroom={selectedBathroom}
                selectedCurtain={selectedCurtain}
                onSelectPaint={setSelectedPaint}
                onSelectFlooring={setSelectedFlooring}
                onSelectBathroom={setSelectedBathroom}
                onSelectCurtain={setSelectedCurtain}
              />
            )}
            {step === 5 && (
              <Step5
                kitchen={kitchen}
                selectedKitchen={selectedKitchen}
                onSelectKitchen={setSelectedKitchen}
              />
            )}
            {step === 6 && (
              <Step6
                aduSizePrice={aduSizePrice}
                roofStylePrice={roofStylePrice}
                heightPrice={heightPrice}
                roofOptionPrice={roofOptionPrice}
                exteriorPrice={exteriorPrice}
                appliancePrice={appliancePrice}
                skylightPrice={skylightPrice}
                windowCountPrice={windowCountPrice}
                paintPrice={paintPrice}
                flooringPrice={flooringPrice}
                bathroomPrice={bathroomPrice}
                curtainPrice={curtainPrice}
                kitchenPrice={kitchenPrice}
              />
            )}
          </div>
        </div>

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
          <div>
            {step < 6 && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Step1({ aduSizes = [], selected, onSelect }: Step1Props) {
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
          flexWrap: "wrap",
        }}
      >
        {aduSizes.map((item) => {
          const active = item.id === selected;

          return (
            <div
              key={item.id}
              onClick={() => onSelect?.(item)}
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
                  fontSize: "26px",
                  fontWeight: "700",
                  color: "#162B55",
                }}
              >
                {item.size}
              </div>

              <div
                style={{
                  marginTop: "8px",
                  fontSize: "20px",
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

function Step2({ roofTypes, selectedRoof, onSelect }: Step2Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {roofTypes.map((roof) => {
        const active = selectedRoof === roof.name;

        return (
          <div
            key={roof.id}
            onClick={() => onSelect(roof)}
            style={{
              width: "290px",
              borderRadius: "18px",
              overflow: "hidden",
              cursor: "pointer",
              padding: "10px",
              background: "#fff",
              border: active ? "2px solid #0E2A5C" : "1px solid #E5E7EB",
              boxShadow: active
                ? "0 12px 30px rgba(14,42,92,.18)"
                : "0 6px 20px rgba(0,0,0,.08)",
              transform: active ? "translateY(-6px)" : "translateY(0)",
              transition: "all .3s ease",
              position: "relative",
            }}
          >
            {active && (
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "#0E2A5C",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  zIndex: 2,
                }}
              >
                ✓
              </div>
            )}

            <div
              style={{
                height: 200,
                overflow: "hidden",
              }}
            >
              <img
                src={roof.image}
                alt={roof.name}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  transition: "transform .4s",
                }}
              />
            </div>

            <div
              style={{
                padding: 24,
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 30,
                  color: "#102A56",
                  fontWeight: 700,
                }}
              >
                {roof.name}
              </h3>

              <p
                style={{
                  marginTop: 10,
                  marginBottom: 18,
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#6B7280",
                }}
              >
                {roof.price}
              </p>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 10,
                  border: "none",
                  background: active ? "#0E2A5C" : "#F3F4F6",
                  color: active ? "#fff" : "#102A56",
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {active ? "Selected" : "Select Roof"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Step3({
  heights = [],
  roofs = [],
  exteriors = [],

  selectedHeight,
  selectedRoof,
  selectedExterior,

  skylights,
  windows,
  appliancePackage,

  onSelectHeight,
  onSelectRoof,
  onSelectExterior,

  onSkylightsChange,
  onWindowsChange,
  onAppliancePackageChange,
}: Step3Props) {
  const selectStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #D7DCE5",
    fontSize: "15px",
    outline: "none",
    background: "#fff",
    cursor: "pointer",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "8px",
    fontWeight: 600,
    color: "#102A56",
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "950px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "25px",
        }}
      >
        {/* Height */}
        <div>
          <label style={labelStyle}>Height of ADU</label>

          <select
            value={selectedHeight}
            onChange={(e) => onSelectHeight(e.target.value)}
            style={selectStyle}
          >
            {heights.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} - ${item.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        {/* Roof */}
        <div>
          <label style={labelStyle}>Roof Options</label>

          <select
            value={selectedRoof}
            onChange={(e) => onSelectRoof(e.target.value)}
            style={selectStyle}
          >
            {roofs.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} - ${item.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        {/* Exterior */}
        <div>
          <label style={labelStyle}>Exterior Finish</label>

          <select
            value={selectedExterior}
            onChange={(e) => onSelectExterior(e.target.value)}
            style={selectStyle}
          >
            {exteriors.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} - ${item.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        {/* Toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "30px",
            gap: "14px",
          }}
        >
          <div
            onClick={() => onAppliancePackageChange(!appliancePackage)}
            style={{
              width: "52px",
              height: "28px",
              borderRadius: "50px",
              background: appliancePackage ? "#102A56" : "#D9DEE8",
              position: "relative",
              cursor: "pointer",
              transition: ".3s",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#fff",
                position: "absolute",
                top: "2px",
                left: appliancePackage ? "26px" : "2px",
                transition: ".3s",
              }}
            />
          </div>

          <span
            style={{
              fontWeight: 500,
              color: "#102A56",
            }}
          >
            Appliance Package
          </span>
        </div>
      </div>

      {/* Skylights */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          marginTop: "35px",
        }}
      >
        <div style={{ width: 100 }}>Skylights</div>

        <input
          type="range"
          min={0}
          max={5}
          value={skylights}
          onChange={(e) => onSkylightsChange(Number(e.target.value))}
          style={{ flex: 1 }}
        />

        <div style={{ width: 25, textAlign: "right" }}>{skylights}</div>
      </div>

      {/* Windows */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          marginTop: "20px",
        }}
      >
        <div style={{ width: 100 }}>Windows</div>

        <input
          type="range"
          min={4}
          max={8}
          value={windows}
          onChange={(e) => onWindowsChange(Number(e.target.value))}
          style={{ flex: 1 }}
        />

        <div style={{ width: 25, textAlign: "right" }}>{windows}</div>
      </div>
    </div>
  );
}

function Step4({
  paint = [],
  flooring = [],
  bathroom = [],
  curtain = [],

  selectedPaint,
  selectedFlooring,
  selectedBathroom,
  selectedCurtain,

  onSelectPaint,
  onSelectFlooring,
  onSelectBathroom,
  onSelectCurtain,
}: Step4Props) {
  const selectStyle: React.CSSProperties = {
    width: "100%",
    padding: "18px",
    fontSize: "18px",
    border: "1px solid #D8DEE8",
    borderRadius: "10px",
    outline: "none",
    background: "#fff",
    color: "#102A56",
    cursor: "pointer",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: 600,
    color: "#102A56",
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1100px",
        margin: "30px auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "35px",
        }}
      >
        {/* Paint */}
        <div>
          <label style={labelStyle}>Paint</label>

          <select
            value={selectedPaint}
            onChange={(e) => onSelectPaint(e.target.value)}
            style={selectStyle}
          >
            {paint.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} - ${item.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        {/* Flooring */}
        <div>
          <label style={labelStyle}>Flooring</label>

          <select
            value={selectedFlooring}
            onChange={(e) => onSelectFlooring(e.target.value)}
            style={selectStyle}
          >
            {flooring.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} - ${item.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        {/* Bathroom */}
        <div>
          <label style={labelStyle}>Bathroom Option</label>

          <select
            value={selectedBathroom}
            onChange={(e) => onSelectBathroom(e.target.value)}
            style={selectStyle}
          >
            {bathroom.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} - ${item.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        {/* Curtain */}
        <div>
          <label style={labelStyle}>Curtain / Doors</label>

          <select
            value={selectedCurtain}
            onChange={(e) => onSelectCurtain(e.target.value)}
            style={selectStyle}
          >
            {curtain.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} - ${item.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

function Step5({ kitchen = [], selectedKitchen, onSelectKitchen }: Step5Props) {
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
          fontWeight: 600,
          color: "#102A56",
        }}
      >
        Cabinets & Countertops
      </label>

      {/* Select */}
      <select
        value={selectedKitchen}
        onChange={(e) => onSelectKitchen(e.target.value)}
        style={{
          width: "100%",
          padding: "16px 18px",
          fontSize: "18px",
          border: "1px solid #D9DEE8",
          borderRadius: "10px",
          outline: "none",
          background: "#fff",
          color: "#1F2937",
          cursor: "pointer",
        }}
      >
        {kitchen.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name} - ${item.price.toLocaleString()}
          </option>
        ))}
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
        {/* SVG Icon */}
        <svg
          width="60"
          height="60"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 28L32 10L54 28" stroke="#2952A3" strokeWidth="2" />
          <path d="M15 25V54H49V25" stroke="#2952A3" strokeWidth="2" />
          <rect
            x="27"
            y="36"
            width="10"
            height="18"
            stroke="#2952A3"
            strokeWidth="2"
          />
          <rect
            x="19"
            y="32"
            width="6"
            height="6"
            stroke="#2952A3"
            strokeWidth="2"
          />
          <rect
            x="39"
            y="32"
            width="6"
            height="6"
            stroke="#2952A3"
            strokeWidth="2"
          />
        </svg>

        <div>
          <p
            style={{
              margin: 0,
              fontSize: "22px",
              color: "#2952A3",
              fontWeight: 600,
            }}
          >
            High-quality cabinets and countertops
          </p>

          <p
            style={{
              margin: "6px 0 0",
              fontSize: "18px",
              color: "#2952A3",
              lineHeight: "28px",
            }}
          >
            Enhance both style and functionality with premium cabinets and
            countertops.
          </p>
        </div>
      </div>
    </div>
  );
}

function Step6({
  aduSizePrice,
  roofStylePrice,
  heightPrice,
  roofOptionPrice,
  exteriorPrice,
  appliancePrice,
  skylightPrice,
  windowCountPrice,
  paintPrice,
  flooringPrice,
  bathroomPrice,
  curtainPrice,
  kitchenPrice,
}: Step6Props) {
  const total =
    aduSizePrice +
    roofStylePrice +
    heightPrice +
    roofOptionPrice +
    exteriorPrice +
    appliancePrice +
    skylightPrice +
    windowCountPrice +
    paintPrice +
    flooringPrice +
    bathroomPrice +
    curtainPrice +
    kitchenPrice;

  const money = (price: number) => `$${price.toLocaleString()}`;

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        width: "100%",
      }}
    >
      {/* Summary */}
      <div
        style={{
          flex: 1,
          border: "1px solid #E5E7EB",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <h2>Summary</h2>

        <Row title="ADU Size" value={money(aduSizePrice)} />
        <Row title="Roof Style" value={money(roofStylePrice)} />
        <Row title="Height" value={money(heightPrice)} />
        <Row title="Roof Options" value={money(roofOptionPrice)} />
        <Row title="Exterior Finish" value={money(exteriorPrice)} />
        <Row title="Appliance Package" value={money(appliancePrice)} />
        <Row title="Skylights" value={money(skylightPrice)} />
        <Row title="Windows" value={money(windowCountPrice)} />
        <Row title="Paint" value={money(paintPrice)} />
        <Row title="Flooring" value={money(flooringPrice)} />
        <Row title="Bathroom" value={money(bathroomPrice)} />
        <Row title="Curtain / Doors" value={money(curtainPrice)} />
        <Row title="Cabinets" value={money(kitchenPrice)} />

        <hr />

        <Row title="Total" value={money(total)} bold />
      </div>

      {/* Price Card */}
      <div
        style={{
          width: "360px",
          border: "1px solid #E5E7EB",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900"
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            padding: "25px",
            textAlign: "center",
          }}
        >
          <p>Total Estimated Price</p>

          <h1>{money(total)}</h1>

          <p>
            This is your estimated price. Final price may vary based on site
            conditions and customizations.
          </p>

          <button
            style={{
              width: "100%",
              padding: "16px",
              background: "#102A56",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            Get My Quote →
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({
  title,
  value,
  bold = false,
}: {
  title: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        fontWeight: bold ? 700 : 500,
      }}
    >
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
}
