"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dataSources = [
  { name: "ЕГРЮЛ", color: "from-blue-400 to-blue-600" },
  { name: "ФНС", color: "from-purple-400 to-purple-600" },
  { name: "МВД", color: "from-red-400 to-red-600" },
  { name: "Росстат", color: "from-green-400 to-green-600" },
  { name: "ФССП", color: "from-orange-400 to-orange-600" },
  { name: "Госзакупки", color: "from-indigo-400 to-indigo-600" },
];

const bankOffers = [
  {
    bank: "Сбербанк",
    rate: "18.9%",
    term: "до 60 мес",
    status: "approved",
    amount: "до 5 млн ₽",
    logo: "🏦",
  },
  {
    bank: "ВТБ",
    rate: "21.5%",
    term: "до 48 мес",
    status: "approved",
    amount: "до 3 млн ₽",
    logo: "🏛️",
  },
  {
    bank: "Альфа-Банк",
    rate: "19.9%",
    term: "до 36 мес",
    status: "pending",
    amount: "до 4 млн ₽",
    logo: "💼",
  },
];

export const FullAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedBank, setSelectedBank] = useState<number | null>(null);
  const [hoveredSource, setHoveredSource] = useState<number | null>(null);

  useEffect(() => {
    const stepDurations = [3000, 4000, 5000];

    const timer = setTimeout(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % 3);
    }, stepDurations[currentStep]);

    return () => clearTimeout(timer);
  }, [currentStep]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-primary/20 backdrop-blur-sm">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/50 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Hero Title */}
        {currentStep === 0 && (
          <motion.div
            key="hero"
            className="flex flex-col items-center justify-center h-full px-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div variants={itemVariants} className="text-center">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-[#004f70] bg-clip-text text-transparent mb-4"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Lider Garant
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-white/80 font-light"
                variants={itemVariants}
              >
                Ваш надежный партнер в мире финансов
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex gap-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Step 2: Data Sources Visualization */}
        {currentStep === 1 && (
          <motion.div
            key="sources"
            className="relative h-full w-full flex flex-col items-center justify-center px-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-[#004f70] bg-clip-text text-transparent mb-8 text-center"
              variants={itemVariants}
            >
              Источники данных
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl">
              {dataSources.map((source, i) => (
                <motion.div
                  key={source.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredSource(i)}
                  onHoverEnd={() => setHoveredSource(null)}
                >
                  <motion.div
                    className={`relative w-full h-24 bg-gradient-to-br ${source.color} rounded-2xl flex items-center justify-center shadow-lg cursor-pointer`}
                  >
                    <div className="text-white text-center">
                      <div className="text-sm font-bold px-2">
                        {source.name}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 3: Bank Offers */}
        {currentStep === 2 && (
          <motion.div
            key="banks"
            className="flex flex-col items-center justify-center h-full px-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.h2
              className="text-3xl font-bold bg-gradient-to-r from-primary to-[#004f70] bg-clip-text text-transparent mb-8"
              variants={itemVariants}
            >
              Лучшие предложения банков
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-4 md:gap-6 w-full max-w-4xl lg:max-w-6xl px-4">
              {bankOffers.map((offer, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedBank(i)}
                  className={`relative p-4 md:p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedBank === i
                      ? "bg-gradient-to-br from-primary/20 to-[#004f70]/20 border-2 border-primary shadow-xl"
                      : "bg-white/10 border-2 border-white/20 shadow-lg hover:border-primary hover:shadow-xl"
                  }`}
                >
                  {selectedBank === i && (
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-warning rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <span className="text-white text-sm">✓</span>
                    </motion.div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{offer.logo}</div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        offer.status === "approved"
                          ? "bg-warning/20 text-warning"
                          : "bg-white/20 text-white/80"
                      }`}
                    >
                      {offer.status === "approved"
                        ? "Одобрено"
                        : "Рассмотрение"}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {offer.bank}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">Ставка</span>
                      <span className="font-bold text-lg md:text-xl text-primary">
                        {offer.rate}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">Срок</span>
                      <span className="font-semibold text-white/80">
                        {offer.term}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">Сумма</span>
                      <span className="font-semibold text-warning">
                        {offer.amount}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {selectedBank !== null && (
                <motion.div
                  className="mt-6 md:mt-8 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-[#004f70] rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <div className="flex items-center gap-3 text-white">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="text-2xl"
                    >
                      ⚡
                    </motion.div>
                    <span className="text-lg font-semibold">
                      Заявка отправлена! Ожидайте звонка менеджера.
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
