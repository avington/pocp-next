import React from 'react';

export const Simple: React.FC = () => {
    return (
        <div>
            <h1>Simple Form</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Simple;