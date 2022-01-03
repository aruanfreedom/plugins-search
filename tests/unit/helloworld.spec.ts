import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/Body.vue";

describe("Body.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "vuetify-loader";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
