// User request: Create a Framer-ready full six-step ADU calculator component in Calculator.tsx with complete helper components (Row, Step1-Step6), full pricing logic, and polished responsive card UI, preserving all steps and self-contained behavior.
import {
    startTransition,
    useCallback,
    useEffect,
    useMemo,
    useState,
    type CSSProperties,
} from "react"
import {
    addPropertyControls,
    ControlType,
    useIsStaticRenderer,
} from "framer"
import { motion } from "framer-motion"

interface MyComponentProps {
    initialStep: number
    quoteButtonLabel: string
    onQuote?: () => void
    style?: CSSProperties
}

type SizeOption = {
    id: string
    label: string
    price: number
}

type RoofOption = {
    id: string
    label: string
    price: number
}

type ToggleOption = {
    id: string
    label: string
    price: number
    helper: string
}

type FinishOption = {
    id: string
    label: string
    multiplier: number
    helper: string
}

type PackageOption = {
    id: string
    label: string
    price: number
    helper: string
}

const SIZE_OPTIONS: SizeOption[] = [
    { id: "320", label: "320 sqft", price: 146000 },
    { id: "480", label: "480 sqft", price: 178800 },
    { id: "560", label: "560 sqft", price: 212800 },
    { id: "640", label: "640 sqft", price: 235800 },
]

const ROOF_OPTIONS: RoofOption[] = [
    { id: "gable", label: "Gable Roof", price: 0 },
    { id: "flat", label: "Flat Roof", price: 7500 },
    { id: "shed", label: "Shed Roof", price: 5600 },
]

const CUSTOMIZATION_OPTIONS: ToggleOption[] = [
    {
        id: "solar",
        label: "Solar-Ready Electrical",
        price: 6200,
        helper: "Conduit and upgraded panel for future solar integration",
    },
    {
        id: "smart",
        label: "Smart Home Bundle",
        price: 3800,
        helper: "Smart lock, thermostat, and lighting controls",
    },
    {
        id: "acoustic",
        label: "Acoustic Insulation Upgrade",
        price: 4100,
        helper: "Enhanced comfort and noise isolation",
    },
]

const FINISH_OPTIONS: FinishOption[] = [
    {
        id: "standard",
        label: "Standard Finish",
        multiplier: 0,
        helper: "Durable essentials with balanced cost",
    },
    {
        id: "signature",
        label: "Signature Finish",
        multiplier: 0.065,
        helper: "Higher-end fixtures, flooring, and trim package",
    },
    {
        id: "premium",
        label: "Premium Finish",
        multiplier: 0.12,
        helper: "Designer materials and top-tier fixture upgrades",
    },
]

const KITCHEN_OPTIONS: PackageOption[] = [
    {
        id: "efficiency",
        label: "Efficiency Kitchen",
        price: 0,
        helper: "Compact layout with essential appliances",
    },
    {
        id: "chef",
        label: "Chef Kitchen",
        price: 12600,
        helper: "Expanded prep space and upgraded appliance set",
    },
]

const STORAGE_OPTIONS: ToggleOption[] = [
    {
        id: "builtins",
        label: "Custom Built-In Storage",
        price: 5200,
        helper: "Wardrobe walls and integrated shelving",
    },
    {
        id: "loft",
        label: "Loft / Overhead Storage",
        price: 3400,
        helper: "Optimized vertical storage configuration",
    },
]

function formatCurrency(value: number): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(value)
}

function chipButtonStyle(selected: boolean): CSSProperties {
    return {
        position: "relative",
        width: "100%",
        borderRadius: 12,
        border: selected ? "1px solid #102A5E" : "1px solid #DDE4EF",
        background: selected ? "#EEF3FF" : "#FFFFFF",
        padding: "12px 12px",
        textAlign: "left",
        cursor: "pointer",
        boxSizing: "border-box",
    }
}

function Row(props: { label: string; value: string; strong?: boolean }) {
    const { label, value, strong = false } = props
    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "7px 0",
                borderBottom: "1px solid #EDF1F7",
            }}
        >
            <span
                style={{
                    color: "#5C6E8E",
                    fontSize: 13,
                    lineHeight: "1.2em",
                    fontWeight: strong ? 600 : 500,
                }}
            >
                {label}
            </span>
            <span
                style={{
                    color: "#102A5E",
                    fontSize: 13,
                    lineHeight: "1.2em",
                    fontWeight: strong ? 700 : 600,
                }}
            >
                {value}
            </span>
        </div>
    )
}

function Step1(props: {
    selectedId: string
    onSelect: (id: string) => void
    interactive: boolean
}) {
    const { selectedId, onSelect, interactive } = props
    return (
        <div style={{ position: "relative" }}>
            <p style={subheadingStyle}>Select your ADU size to begin</p>
            <div style={gridStyle}>
                {SIZE_OPTIONS.map((option) => {
                    const selected = selectedId === option.id
                    return (
                        <motion.button
                            key={option.id}
                            type="button"
                            onClick={() => onSelect(option.id)}
                            whileHover={interactive ? { y: -1 } : undefined}
                            whileTap={interactive ? { scale: 0.992 } : undefined}
                            style={chipButtonStyle(selected)}
                        >
                            <div style={checkStyle(selected)}>{selected ? "✓" : ""}</div>
                            <div style={optionTitleStyle}>{option.label}</div>
                            <div style={optionPriceStyle}>{formatCurrency(option.price)}</div>
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )
}

function Step2(props: {
    selectedId: string
    onSelect: (id: string) => void
    interactive: boolean
}) {
    const { selectedId, onSelect, interactive } = props
    return (
        <div style={{ position: "relative" }}>
            <p style={subheadingStyle}>Pick the roof style that suits your property</p>
            <div style={stackStyle}>
                {ROOF_OPTIONS.map((option) => {
                    const selected = selectedId === option.id
                    return (
                        <motion.button
                            key={option.id}
                            type="button"
                            onClick={() => onSelect(option.id)}
                            whileHover={interactive ? { y: -1 } : undefined}
                            whileTap={interactive ? { scale: 0.992 } : undefined}
                            style={chipButtonStyle(selected)}
                        >
                            <div style={checkStyle(selected)}>{selected ? "✓" : ""}</div>
                            <div style={optionTitleStyle}>{option.label}</div>
                            <div style={optionPriceStyle}>
                                {option.price === 0
                                    ? "Included"
                                    : `+ ${formatCurrency(option.price)}`}
                            </div>
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )
}

function Step3(props: {
    selectedIds: string[]
    onToggle: (id: string) => void
    interactive: boolean
}) {
    const { selectedIds, onToggle, interactive } = props
    return (
        <div style={{ position: "relative" }}>
            <p style={subheadingStyle}>Choose customization upgrades</p>
            <div style={stackStyle}>
                {CUSTOMIZATION_OPTIONS.map((option) => {
                    const selected = selectedIds.includes(option.id)
                    return (
                        <motion.button
                            key={option.id}
                            type="button"
                            onClick={() => onToggle(option.id)}
                            whileHover={interactive ? { y: -1 } : undefined}
                            whileTap={interactive ? { scale: 0.992 } : undefined}
                            style={chipButtonStyle(selected)}
                        >
                            <div style={checkStyle(selected)}>{selected ? "✓" : ""}</div>
                            <div style={optionTitleStyle}>{option.label}</div>
                            <div style={helperTextStyle}>{option.helper}</div>
                            <div style={optionPriceStyle}>+ {formatCurrency(option.price)}</div>
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )
}

function Step4(props: {
    selectedId: string
    onSelect: (id: string) => void
    interactive: boolean
}) {
    const { selectedId, onSelect, interactive } = props
    return (
        <div style={{ position: "relative" }}>
            <p style={subheadingStyle}>Select your interior finishes package</p>
            <div style={stackStyle}>
                {FINISH_OPTIONS.map((option) => {
                    const selected = selectedId === option.id
                    return (
                        <motion.button
                            key={option.id}
                            type="button"
                            onClick={() => onSelect(option.id)}
                            whileHover={interactive ? { y: -1 } : undefined}
                            whileTap={interactive ? { scale: 0.992 } : undefined}
                            style={chipButtonStyle(selected)}
                        >
                            <div style={checkStyle(selected)}>{selected ? "✓" : ""}</div>
                            <div style={optionTitleStyle}>{option.label}</div>
                            <div style={helperTextStyle}>{option.helper}</div>
                            <div style={optionPriceStyle}>
                                {option.multiplier === 0
                                    ? "No finish uplift"
                                    : `+ ${(option.multiplier * 100).toFixed(1)}%`}
                            </div>
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )
}

function Step5(props: {
    selectedKitchenId: string
    selectedStorageIds: string[]
    onKitchenSelect: (id: string) => void
    onStorageToggle: (id: string) => void
    interactive: boolean
}) {
    const {
        selectedKitchenId,
        selectedStorageIds,
        onKitchenSelect,
        onStorageToggle,
        interactive,
    } = props
    return (
        <div style={{ position: "relative" }}>
            <p style={subheadingStyle}>Configure kitchen and storage options</p>
            <h4 style={sectionHeaderStyle}>Kitchen Package</h4>
            <div style={stackStyle}>
                {KITCHEN_OPTIONS.map((option) => {
                    const selected = selectedKitchenId === option.id
                    return (
                        <motion.button
                            key={option.id}
                            type="button"
                            onClick={() => onKitchenSelect(option.id)}
                            whileHover={interactive ? { y: -1 } : undefined}
                            whileTap={interactive ? { scale: 0.992 } : undefined}
                            style={chipButtonStyle(selected)}
                        >
                            <div style={checkStyle(selected)}>{selected ? "✓" : ""}</div>
                            <div style={optionTitleStyle}>{option.label}</div>
                            <div style={helperTextStyle}>{option.helper}</div>
                            <div style={optionPriceStyle}>
                                {option.price === 0
                                    ? "Included"
                                    : `+ ${formatCurrency(option.price)}`}
                            </div>
                        </motion.button>
                    )
                })}
            </div>
            <h4 style={sectionHeaderStyle}>Storage Add-ons</h4>
            <div style={stackStyle}>
                {STORAGE_OPTIONS.map((option) => {
                    const selected = selectedStorageIds.includes(option.id)
                    return (
                        <motion.button
                            key={option.id}
                            type="button"
                            onClick={() => onStorageToggle(option.id)}
                            whileHover={interactive ? { y: -1 } : undefined}
                            whileTap={interactive ? { scale: 0.992 } : undefined}
                            style={chipButtonStyle(selected)}
                        >
                            <div style={checkStyle(selected)}>{selected ? "✓" : ""}</div>
                            <div style={optionTitleStyle}>{option.label}</div>
                            <div style={helperTextStyle}>{option.helper}</div>
                            <div style={optionPriceStyle}>+ {formatCurrency(option.price)}</div>
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )
}

function Step6(props: {
    sizeLabel: string
    roofLabel: string
    finishLabel: string
    kitchenLabel: string
    storageLabels: string[]
    subtotal: number
    finishUplift: number
    totalEstimate: number
    customizationTotal: number
}) {
    const {
        sizeLabel,
        roofLabel,
        finishLabel,
        kitchenLabel,
        storageLabels,
        subtotal,
        finishUplift,
        totalEstimate,
        customizationTotal,
    } = props
    return (
        <div style={{ position: "relative" }}>
            <p style={subheadingStyle}>Estimate summary</p>
            <div
                style={{
                    position: "relative",
                    border: "1px solid #DFE8F6",
                    borderRadius: 12,
                    background: "#FBFDFF",
                    padding: "10px 12px",
                }}
            >
                <Row label="ADU Size" value={sizeLabel} />
                <Row label="Roof Style" value={roofLabel} />
                <Row label="Interior Finishes" value={finishLabel} />
                <Row label="Kitchen Package" value={kitchenLabel} />
                <Row
                    label="Storage Add-ons"
                    value={storageLabels.length ? storageLabels.join(", ") : "None"}
                />
                <Row label="Customization Upgrades" value={formatCurrency(customizationTotal)} />
                <Row label="Subtotal" value={formatCurrency(subtotal)} />
                <Row
                    label="Finish Uplift"
                    value={finishUplift > 0 ? `+ ${formatCurrency(finishUplift)}` : "$0"}
                />
                <div
                    style={{
                        position: "relative",
                        marginTop: 8,
                        paddingTop: 8,
                        borderTop: "1px solid #E3EBF8",
                    }}
                >
                    <Row label="Estimated Total" value={formatCurrency(totalEstimate)} strong />
                </div>
            </div>
        </div>
    )
}

const subheadingStyle: CSSProperties = {
    color: "#5E7090",
    fontSize: 14,
    lineHeight: "1.35em",
    fontWeight: 500,
    margin: "0 0 12px 0",
}

const optionTitleStyle: CSSProperties = {
    color: "#102A5E",
    fontSize: 14,
    lineHeight: "1.2em",
    fontWeight: 600,
    paddingRight: 24,
}

const optionPriceStyle: CSSProperties = {
    color: "#4D648A",
    fontSize: 13,
    lineHeight: "1.2em",
    fontWeight: 600,
    marginTop: 5,
}

const helperTextStyle: CSSProperties = {
    color: "#7287AA",
    fontSize: 12,
    lineHeight: "1.35em",
    fontWeight: 500,
    marginTop: 4,
    paddingRight: 24,
}

const sectionHeaderStyle: CSSProperties = {
    color: "#102A5E",
    fontSize: 13,
    lineHeight: "1.2em",
    margin: "14px 0 8px 0",
    fontWeight: 700,
}

const gridStyle: CSSProperties = {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
    gap: 10,
}

const stackStyle: CSSProperties = {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 10,
}

function checkStyle(selected: boolean): CSSProperties {
    return {
        position: "absolute",
        right: 10,
        top: 10,
        width: 17,
        height: 17,
        borderRadius: "50%",
        border: selected ? "1px solid #102A5E" : "1px solid #C9D4E8",
        background: selected ? "#102A5E" : "#FFFFFF",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 11,
        fontWeight: 700,
        lineHeight: "1em",
    }
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function Calculator(props: MyComponentProps) {
    const {
        initialStep = 1,
        quoteButtonLabel = "Get my quote",
        onQuote,
        style,
    } = props
    const isStaticRenderer = useIsStaticRenderer()
    const [step, setStep] = useState(Math.max(1, Math.min(6, Math.round(initialStep))))
    const [sizeId, setSizeId] = useState<string>("320")
    const [roofId, setRoofId] = useState<string>("gable")
    const [customizationIds, setCustomizationIds] = useState<string[]>([])
    const [finishId, setFinishId] = useState<string>("standard")
    const [kitchenId, setKitchenId] = useState<string>("efficiency")
    const [storageIds, setStorageIds] = useState<string[]>([])

    useEffect(() => {
        const nextStep = Math.max(1, Math.min(6, Math.round(initialStep)))
        startTransition(() => setStep(nextStep))
    }, [initialStep])

    const selectedSize = useMemo(
        () => SIZE_OPTIONS.find((item) => item.id === sizeId) ?? SIZE_OPTIONS[0],
        [sizeId]
    )
    const selectedRoof = useMemo(
        () => ROOF_OPTIONS.find((item) => item.id === roofId) ?? ROOF_OPTIONS[0],
        [roofId]
    )
    const selectedFinish = useMemo(
        () => FINISH_OPTIONS.find((item) => item.id === finishId) ?? FINISH_OPTIONS[0],
        [finishId]
    )
    const selectedKitchen = useMemo(
        () => KITCHEN_OPTIONS.find((item) => item.id === kitchenId) ?? KITCHEN_OPTIONS[0],
        [kitchenId]
    )

    const customizationTotal = useMemo(
        () =>
            CUSTOMIZATION_OPTIONS.filter((item) => customizationIds.includes(item.id)).reduce(
                (sum, item) => sum + item.price,
                0
            ),
        [customizationIds]
    )
    const storageTotal = useMemo(
        () =>
            STORAGE_OPTIONS.filter((item) => storageIds.includes(item.id)).reduce(
                (sum, item) => sum + item.price,
                0
            ),
        [storageIds]
    )
    const subtotal = useMemo(
        () =>
            selectedSize.price +
            selectedRoof.price +
            selectedKitchen.price +
            customizationTotal +
            storageTotal,
        [selectedKitchen.price, selectedRoof.price, selectedSize.price, customizationTotal, storageTotal]
    )
    const finishUplift = useMemo(
        () => Math.round(subtotal * selectedFinish.multiplier),
        [selectedFinish.multiplier, subtotal]
    )
    const totalEstimate = useMemo(() => subtotal + finishUplift, [subtotal, finishUplift])
    const storageLabels = useMemo(
        () =>
            STORAGE_OPTIONS.filter((item) => storageIds.includes(item.id)).map((item) => item.label),
        [storageIds]
    )

    const handleToggleCustomization = useCallback((id: string) => {
        startTransition(() => {
            setCustomizationIds((prev) =>
                prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]
            )
        })
    }, [])

    const handleToggleStorage = useCallback((id: string) => {
        startTransition(() => {
            setStorageIds((prev) =>
                prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]
            )
        })
    }, [])

    const goNext = useCallback(() => {
        startTransition(() => {
            setStep((prev) => Math.min(6, prev + 1))
        })
    }, [])

    const goBack = useCallback(() => {
        startTransition(() => {
            setStep((prev) => Math.max(1, prev - 1))
        })
    }, [])

    const progress = useMemo(() => (step / 6) * 100, [step])

    const canAnimate = !isStaticRenderer

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                maxWidth: 860,
                boxSizing: "border-box",
                margin: 0,
                padding: 10,
                fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                ...style,
            }}
        >
            <div
                style={{
                    position: "relative",
                    background: "#FFFFFF",
                    border: "1px solid #E7ECF4",
                    borderRadius: 16,
                    boxShadow: "0 14px 30px rgba(16, 42, 94, 0.08)",
                    padding: 18,
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                        marginBottom: 14,
                    }}
                >
                    <div
                        style={{
                            color: "#63779A",
                            fontSize: 12,
                            lineHeight: "1.2em",
                            fontWeight: 600,
                            minWidth: "max-content",
                        }}
                    >
                        Step {step} of 6
                    </div>
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            maxWidth: 340,
                            height: 8,
                            borderRadius: 999,
                            background: "#E5EBF6",
                            overflow: "hidden",
                        }}
                    >
                        <motion.div
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                height: "100%",
                                background: "#102A5E",
                                borderRadius: 999,
                            }}
                            animate={{ width: `${progress}%` }}
                            transition={canAnimate ? { duration: 0.24, ease: "easeOut" } : { duration: 0 }}
                        />
                    </div>
                </div>

                <div style={{ position: "relative", textAlign: "center", marginBottom: 15 }}>
                    <h2
                        style={{
                            margin: 0,
                            color: "#102A5E",
                            fontSize: 30,
                            lineHeight: "1.03em",
                            letterSpacing: "-0.03em",
                            fontWeight: 700,
                        }}
                    >
                        Let&apos;s get started
                    </h2>
                </div>

                <div style={{ position: "relative", marginBottom: 16 }}>
                    {step === 1 && (
                        <Step1
                            selectedId={sizeId}
                            onSelect={(id) => startTransition(() => setSizeId(id))}
                            interactive={canAnimate}
                        />
                    )}
                    {step === 2 && (
                        <Step2
                            selectedId={roofId}
                            onSelect={(id) => startTransition(() => setRoofId(id))}
                            interactive={canAnimate}
                        />
                    )}
                    {step === 3 && (
                        <Step3
                            selectedIds={customizationIds}
                            onToggle={handleToggleCustomization}
                            interactive={canAnimate}
                        />
                    )}
                    {step === 4 && (
                        <Step4
                            selectedId={finishId}
                            onSelect={(id) => startTransition(() => setFinishId(id))}
                            interactive={canAnimate}
                        />
                    )}
                    {step === 5 && (
                        <Step5
                            selectedKitchenId={kitchenId}
                            selectedStorageIds={storageIds}
                            onKitchenSelect={(id) => startTransition(() => setKitchenId(id))}
                            onStorageToggle={handleToggleStorage}
                            interactive={canAnimate}
                        />
                    )}
                    {step === 6 && (
                        <Step6
                            sizeLabel={selectedSize.label}
                            roofLabel={selectedRoof.label}
                            finishLabel={selectedFinish.label}
                            kitchenLabel={selectedKitchen.label}
                            storageLabels={storageLabels}
                            subtotal={subtotal}
                            finishUplift={finishUplift}
                            customizationTotal={customizationTotal}
                            totalEstimate={totalEstimate}
                        />
                    )}
                </div>

                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 10,
                        marginTop: 10,
                    }}
                >
                    <motion.button
                        type="button"
                        onClick={goBack}
                        disabled={step === 1}
                        whileHover={canAnimate && step !== 1 ? { y: -1 } : undefined}
                        whileTap={canAnimate && step !== 1 ? { scale: 0.99 } : undefined}
                        style={{
                            position: "relative",
                            borderRadius: 10,
                            border: "1px solid #CCD8EB",
                            background: "#FFFFFF",
                            color: "#102A5E",
                            minWidth: 90,
                            padding: "10px 14px",
                            fontSize: 14,
                            fontWeight: 600,
                            cursor: step === 1 ? "not-allowed" : "pointer",
                            opacity: step === 1 ? 0.45 : 1,
                        }}
                    >
                        Back
                    </motion.button>

                    {step < 6 ? (
                        <motion.button
                            type="button"
                            onClick={goNext}
                            whileHover={canAnimate ? { y: -1, filter: "brightness(1.04)" } : undefined}
                            whileTap={canAnimate ? { scale: 0.987, filter: "brightness(0.96)" } : undefined}
                            style={{
                                position: "relative",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                                border: "none",
                                borderRadius: 12,
                                background: "#102A5E",
                                color: "#FFFFFF",
                                padding: "10px 16px",
                                minWidth: 102,
                                fontSize: 14,
                                fontWeight: 600,
                                cursor: "pointer",
                                boxShadow:
                                    "0 4px 10px rgba(9, 18, 48, 0.22), 0 1px 1px rgba(9, 18, 48, 0.2)",
                            }}
                        >
                            Next
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                <path
                                    d="M3 2.25L7.2 6L3 9.75M6.75 6H2.25"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.button>
                    ) : (
                        <motion.button
                            type="button"
                            onClick={() => {
                                if (onQuote) onQuote()
                            }}
                            whileHover={canAnimate ? { y: -1, filter: "brightness(1.04)" } : undefined}
                            whileTap={canAnimate ? { scale: 0.987, filter: "brightness(0.96)" } : undefined}
                            style={{
                                position: "relative",
                                border: "none",
                                borderRadius: 12,
                                background: "#102A5E",
                                color: "#FFFFFF",
                                padding: "10px 16px",
                                minWidth: 145,
                                fontSize: 14,
                                fontWeight: 600,
                                cursor: "pointer",
                                boxShadow:
                                    "0 4px 10px rgba(9, 18, 48, 0.22), 0 1px 1px rgba(9, 18, 48, 0.2)",
                            }}
                        >
                            {quoteButtonLabel}
                        </motion.button>
                    )}
                </div>
            </div>
        </div>
    )
}

addPropertyControls(Calculator, {
    initialStep: {
        type: ControlType.Number,
        title: "Initial Step",
        min: 1,
        max: 6,
        step: 1,
        defaultValue: 1,
    },
    quoteButtonLabel: {
        type: ControlType.String,
        title: "Quote Label",
        defaultValue: "Get my quote",
    },
    onQuote: {
        type: ControlType.EventHandler,
        title: "On Quote",
    },
})