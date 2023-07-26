import React from "react";
import { Rating } from "./Rating";
import { render } from "@testing-library/react";

describe('Rating component', () => {
    // write test cases based on the ./Rating.tsx file

    // test case 1
    it('should render the Rating component', () => {
        const component = <Rating 
            rating={1}
            maxRating={5}
            color={'red'}
            size={24}
            spacing={5}
            direction={'row'}
            onSetRating={() => {}}
        />;
        const { getByTestId } = render(component);
        const elements = getByTestId('rating');
        expect(elements).toBeInTheDocument();
    })
});