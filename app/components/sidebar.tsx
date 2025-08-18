import React, { useState } from "react";
import { Range } from "react-range"; // nhớ cài: npm install react-range

export const Sidebar = () => {
    const [values, setValues] = useState([10, 540]);

    return (
        <div className="sidebar">
            {/* Department */}
            <div className="sidebar__item">
                <h4>Department</h4>
                <ul>
                    {[
                        "Fresh Meat",
                        "Vegetables",
                        "Fruit & Nut Gifts",
                        "Fresh Berries",
                        "Ocean Foods",
                        "Butter & Eggs",
                        "Fastfood",
                        "Fresh Onion",
                        "Papayaya & Crisps",
                        "Oatmeal",
                    ].map((item, idx) => (
                        <li key={idx}>
                            <a className="!no-underline hover:text-green-600" href="#">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price filter */}
            <div className="sidebar__item">
                <h4>Price</h4>
                <div className="price-range-wrap">
                    <Range
                        step={10}
                        min={10}
                        max={540}
                        values={values}
                        onChange={(newValues) => setValues(newValues)}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}
                                className="h-2 bg-gray-300 rounded-full cursor-pointer"
                                style={{ width: "100%" }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props }) => (
                            <div
                                {...props}
                                className="w-4 h-4 bg-green-500 rounded-full shadow cursor-pointer"
                            />
                        )}
                    />
                    <div className="flex justify-between mt-2">
                        <input
                            type="text"
                            value={values[0]}
                            readOnly
                            className="border px-2 w-16 text-center"
                        />
                        <input
                            type="text"
                            value={values[1]}
                            readOnly
                            className="border px-2 w-16 text-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
