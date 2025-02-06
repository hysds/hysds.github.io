---
sidebar_class_name: hidden
---

# API

HySDS (Hybrid Cloud Science Data System) is an open source science data processing system used across many large-scale Earth Science missions, data production, and analysis systems. This documentation covers the key APIs and components of HySDS.

## Core Components

### GRQ (Geo Region Query)
The geospatial catalog and data management component that provides:
- Faceted search of data products
- Production rules evaluation and actions
- Data triggering based on spatial queries

#### Key APIs:
- Data catalog queries
- Metadata ingest
- Production rule management
- Trigger evaluation

### Mozart 
Job management and orchestration component handling:
- Faceted search management of jobs
- Production rules evaluation and actions
- Queue management
- Job status tracking

#### Key APIs:
- Job submission
- Queue management 
- Job status queries
- Production rule management

### Metrics
Runtime analytics component providing:
- Real-time job metrics
- Worker metrics
- Processing statistics
- Performance monitoring

#### Key APIs:
- Metrics queries
- Worker status
- Performance analytics
- Resource utilization

### Factotum
"Hot" helper workers component for:
- Low-latency processes
- Job preprocessing
- Status updates

#### Key APIs:
- Worker management
- Process control
- Status updates

### Verdi Workers
Distributed compute nodes that:
- Run PGEs (Product Generation Executives) at scale
- Handle data staging
- Manage job execution
- Report status

#### Key APIs:
- Job execution
- Data staging
- Status reporting
- Resource management

## Deployment Options

HySDS supports multiple deployment configurations:

### Cloud Deployment
- AWS Auto-Scaling Spot Fleet support
- Elastic compute scaling
- S3 data management
- Cloud-native services integration

### On-Premise Deployment
- Local compute cluster support
- Shared filesystem integration
- Local data management
- Infrastructure optimization

### Hybrid Cloud Deployment
- Spans both cloud and on-premise resources
- Unified management plane
- Cross-platform data handling
- Flexible resource allocation

### HECC (High-End Computing Capability) Integration
- PBS job management
- HPC cluster integration
- Specialized resource handling
- Performance optimization

## Key Interfaces

### Data Management
```python
# GRQ Data Catalog Interface
class DataCatalog:
    def ingest(metadata):
        """Ingest metadata into catalog"""
        pass
    
    def search(query):
        """Search catalog with faceted query"""
        pass
        
    def trigger_rules(data):
        """Evaluate trigger rules on data"""
        pass
```

### Job Management 
```python
# Mozart Job Management Interface
class JobManager:
    def submit(job_spec):
        """Submit job for execution"""
        pass
        
    def status(job_id):
        """Get job status"""
        pass
        
    def manage_queue(queue_id, action):
        """Manage job queues"""
        pass
```

### Worker Management
```python
# Verdi Worker Interface
class VerdiWorker:
    def execute(job):
        """Execute job on worker"""
        pass
        
    def stage_data(data_ref):
        """Stage data for job"""
        pass
        
    def report_status(status):
        """Report job status"""
        pass
```

## Auto-Scaling

HySDS provides sophisticated auto-scaling capabilities:

### Scale Out
- Based on queue backlog
- Configurable thresholds
- Resource-aware scaling
- Platform-specific optimization

### Scale In
- Based on worker utilization
- Graceful shutdown
- Resource reclamation
- Cost optimization

## Production Rules

HySDS supports flexible production rules for automation:

### Trigger Types
- Data-based triggers
- Time-based triggers
- Event-based triggers
- Custom triggers

### Rule Components
- Conditions
- Actions
- Parameters
- Constraints

## Security Considerations

When deploying HySDS, consider:

- Authentication and authorization
- Network security
- Data protection
- Resource isolation
- Compliance requirements

## Best Practices

### Deployment
- Use appropriate deployment topology
- Configure auto-scaling appropriately
- Monitor resource utilization
- Optimize data locality

### Development
- Follow API conventions
- Implement proper error handling
- Use appropriate logging
- Consider scalability

### Operations
- Monitor system health
- Manage resources effectively
- Handle errors gracefully
- Maintain security posture

## References

- GitHub Repository: https://github.com/hysds/
- Documentation Wiki: https://hysds-core.atlassian.net/wiki/spaces/HYS/overview
- Issue Tracking: https://hysds-core.atlassian.net/jira/software/c/projects/HC/issues

## Getting Help

For additional support:
- Join the community Slack channels
- Submit issues on GitHub
- Consult the documentation wiki
- Contact the development team