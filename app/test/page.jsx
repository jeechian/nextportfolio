import React from "react";
const page = () => {
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold">Fancy Background</h1>
            </div>
            <div
                className="min-h-screen flex items-center justify-center"
                style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover' }}
            >
                <h1 className="text-white text-4xl font-bold">Fancy Background</h1>
            </div>
        </div>

    )
}
export default page