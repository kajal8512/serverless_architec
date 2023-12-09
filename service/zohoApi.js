const {zohoData} = require('../helpers/zohoDataApi');

async function getStudents(event){
    const queryParams = event.queryStringParameters;
    // Validate and extract required parameters
    const min_value = queryParams.min_value;
    const max_value = queryParams.max_value;
    try {
        const params = {
            criteria: 'Student_ID1 >=' + min_value + '&& Student_ID1 <=' + max_value,
            max_records: 1000,
        }
        const studentsData = await zohoData({
            queryStringParameters: {
                reportName: 'All_Students',
                params: params,
            },
        });

        console.log(studentsData);
        return studentsData;
    } catch (error) {
        console.error('Error fetching data from Zoho:', error);
        return {
            statusCode: 500,
            body: 'Internal Server Error',
        };
    }
}

module.exports = {getStudents};