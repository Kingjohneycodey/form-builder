
const fetchForms = async (): Promise<{ data: any[] }> => {
    try {
      const response = await fetch(`https://api.ngml.skillzserver.com/formbuilder/api/forms`, {
        headers: {
          Authorization: "Bearer 231|ewCBKQ1j3dNTTYU1imOnIR3FLMvOPtRECcvvANIy04d89335"
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw error so that it can be handled by the calling function
    }
  }


export default fetchForms