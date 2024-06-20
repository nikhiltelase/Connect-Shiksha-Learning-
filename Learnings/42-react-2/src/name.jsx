let nameList = [
    { name: 'ram', key: 1 },
    { name: 'krishna', key: 2 },
    { name: 'shyam', key: 3 },
    { name: 'bharat', key: 4 },
    { name: 'ramchandra', key: 5 },
]

export default function ShowNameList() {
    let list = nameList.map((nameDict) =>
        <li key={nameDict.key}>
            {nameDict.name}
        </li>
    )

    return (
        <>
            <h2>Names List</h2>
            <ul>{list}</ul>
        </>

    )
}