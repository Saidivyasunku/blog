import Comment from "components/Comment";
import { mountWithMock,shallowWithMock } from "__utils__/index";
import "@testing-library/jest-dom/extend-expect";

describe("Comment", () => {
  const mockData = {
    createdAt: "2021-03-04T23:50:32.618Z",
    title: "Qui quo non omnis tenetur.",
    description:
      "Temporibus illo voluptatum illum possimus. Minus laudantium eum. Corrupti provident blanditiis qui sed aperiam ut totam. Cupiditate autem dolor pariatur commodi. Nesciunt incidunt vero repellat reiciendis.",
    updatedAt: "2021-09-17T02:24:07.859Z",
    id: "1",
    postId: "1",
  };
  it("Should render correctly", () => {
    const wrapper = mountWithMock(Comment, mockData);
    expect(wrapper.find("div").length).toBe(3);
  });
  it("Should not render correctly", () => {
    const wrapper = shallowWithMock(Comment, {});
    expect(wrapper.html()).toEqual(null)
  });
});
