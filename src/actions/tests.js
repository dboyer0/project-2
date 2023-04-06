export const TEST_TOGGLE = "TEST_TOGGLE";

export const toggleTest = (item) => {
    return {
        type: TEST_TOGGLE,
        item
    };
}