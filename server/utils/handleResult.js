export default function handleResult(result, res) {
    if (result.error) {
        res.status(500).json({ status:500, msg:'Internal Server Error', error: result.error })
    } else {
        res.status(200).json({ status:200, msg:'OK', data: result })
    }
}
