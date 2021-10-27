const fetchImg = async () => {
  try {
    const fetchedData = await fetch(
      'https://api.thecatapi.com/v1/images/search?mime_types=jpg&limit=20&api_key=2ab73ab1-f5ca-4a8a-bf86-25e64a0f6abf'
    );
    if (fetchedData.status !== 200)
      throw new Error(`${fetchedData.status} - ${fetchedData.statusText}`);

    const res = await fetchedData.json();

    return res;
  } catch (err) {
    console.error(`💥💥 ${err.message}`);
  }
};

export default fetchImg;
