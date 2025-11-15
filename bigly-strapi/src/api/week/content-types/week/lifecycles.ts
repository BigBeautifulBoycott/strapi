// src/api/week/content-types/week/lifecycles.ts

export default {
  async beforeCreate(event) {
    const { data } = event.params;

    if (data.week_number != null) {
      const n = data.week_number;
      data.name = `Week ${n}`;
      data.slug = `week-${n}`;
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;

    if (data.week_number != null) {
      const n = data.week_number;
      data.name = `Week ${n}`;
      data.slug = `week-${n}`;
    }
  },
};
