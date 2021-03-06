import { shallowMount } from "@vue/test-utils";
import Body from "@/components/Body.vue";

describe("Body.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "vuetify-loader";
    const wrapper = shallowMount(Body, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
