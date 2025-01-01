import { Brain, Timer, Trophy, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Wquiz() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                {/* Hero Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 transform transition-all duration-300 hover:scale-[1.02]">
                    {/* Header */}
                    <div className="text-center py-2">
                        <h1 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            برای آزمایش خودت آماده ای؟
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl md:mt-3">
                            در مینی کوییز شرکت کنید و توانایی خودتون رو امتحان کنید.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-center gap-x-3 space-x-4 p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                            <div className="bg-indigo-600 p-2 rounded-lg">
                                <Timer className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-900">15 دقیقه</h3>
                                <p className="text-sm text-indigo-700">زمان کوییز</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-3 space-x-4 p-4 rounded-xl bg-purple-50 border border-purple-100">
                            <div className="bg-purple-600 p-2 rounded-lg">
                                <Brain className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-purple-900">20 پرسش</h3>
                                <p className="text-sm text-purple-700">با دقت پاسخ دهید</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-3 space-x-4 p-4 rounded-xl bg-pink-50 border border-pink-100">
                            <div className="bg-pink-600 p-2 rounded-lg">
                                <Trophy className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-pink-900">امتیازات</h3>
                                <p className="text-sm text-pink-700">کارنامه شما نمایش داده میشود</p>
                            </div>
                        </div>
                    </div>

                    {/* Start Button */}
                    <div className="flex justify-center pt-4">
                        <Link to='/bquiz'>
                            <button
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            >
                                <ArrowRight
                                    className={`w-5 h-5 transform transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''
                                        }`}
                                />
                                <span className="mr-2">شروع آزمون</span>
                            </button>
                        </Link>
                    </div>

                    {/* Footer Info */}
                    <div className="text-center text-sm text-gray-500 pt-4">
                        <p className='text-xl mb-2'>نکات قبل از شروع آزمون:</p>
                        <p>1. از وصل بودن اینترنت خود اطمینان حاصل کنید.</p>
                        <p>2. اگر پایه تحصیلی کنونی خود را تمام نکرده اید، یک پایه قبل از پایه تحصیلی کنونی خود را انتخاب کنید.</p>
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="fixed inset-0 -z-10 overflow-hidden">
                    <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
                </div>
            </div>
        </div>
    );
}

export default Wquiz;