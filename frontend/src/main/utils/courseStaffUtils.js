export function cellToAxiosParamsDelete(formData) {
  return {
    url: "/api/coursestaff/delete",
    method: "DELETE",
    params: {
      id: formData.id,
      courseId: formData.courseId,
      removeFromOrg: formData.removeFromOrg,
    },
  };
}
