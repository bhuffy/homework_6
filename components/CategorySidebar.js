import React from 'react';

export default function CategorySidebar() {
    return (
        <>
            <div class="category__sidebar">
                <h2 class="mt-5">Filter</h2>
                <div class="mb-6" id="sizes">
                    <label class="h3">Size</label>
                    <div class="checkbox-list">
                        <label class="checkbox-container">Tiny
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">Small
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">Medium
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">Large
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>

                <div class="mb-6" id="colors">
                    <label class="h3 mb-5">Color</label>
                    <div class="checkbox-list">
                        <label class="checkbox-container">Strawberry
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">Blackberry
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">Blackberry
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">Crazyberry
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">Fire Orange
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">Lightberry
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">Teal
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}