export const fetchListContent = async () => {
  try {
    const list = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/list`, {
      cache: "no-store",
    });
    // console.log(list,'sdfsdfsdf');

    const resp = await list.json();

    return { data: resp, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};
