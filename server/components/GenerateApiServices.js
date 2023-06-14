import findOnCollection from '@server/data/actions/findOnCollection';
import saveOnCollection from '@server/data/actions/saveOnCollection';
import updateOnCollection from "@server/data/actions/updateOnCollection";
import deleteOnCollection from "@server/data/actions/removeOnCollection";
import analyzeCollection from "@server/data/actions/analyzeCollection";
import importCollection from "@server/data/actions/importCollection";
import _ from 'lodash';


export default function generateApiServices({req, res, config}) {
    const {collection, enableServices, customServices} = config;
    const {query, body} = req;
    const {controller} = query;
    const services = {
        async all() {
            const result = await collection.find({}).exec();
            handleResult(result)
        },
        async find() {
            const { filters, projection, options, singleton, links } = body;
            const result = await findOnCollection({ config, filters, projection, options, singleton, enableLinks: links })
            handleResult(result)
        },
        async create() {
            const result = await saveOnCollection({collection, body})
            handleResult(result)
        },
        async update() {
            const {selector, modifier, singleton, upsert} = body;
            const result = await updateOnCollection({collection, selector, modifier, singleton, upsert})
            handleResult(result)
        },
        async delete() {
            const {selector, singleton, logical} = body;
            const result = await deleteOnCollection({collection, selector, singleton, logical})
            handleResult(result)
        },
        async analyze() {
            const result = await analyzeCollection({collection})
            handleResult(result)
        }, // stats and data analisis
        async importData() {
            const result = await importCollection({collection, body})
            handleResult(result)
        }, // import data from file
        async exportData() {
            const result = await collection.find({}).exec();
            handleResult(result)
        }, // export data to file
    }

    _.map(customServices, (customService, key) => {
        services[key] = async () => customService.service({req, res, config})
    })

    function handleResult(result) {
        if (result.error) {
            res.status(500).json(result)
        } else {
            res.status(200).json(result)
        }
    }

    if (!enableServices && !customServices) {
        return {
            [controller]: ({}) => {
                res.status(404).json({error: 'Not Found'});
            }
        }
    }

    if (!enableServices?.[controller]?.enabled && !customServices?.[controller]?.enabled) {
        return {
            [controller]: ({}) => {
                res.status(404).json({error: 'Disabled'});
            }
        }

    }

    return {
        [controller]: services[controller]
    }

}
